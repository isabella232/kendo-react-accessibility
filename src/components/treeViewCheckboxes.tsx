import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import {
    TreeView, processTreeViewItems, handleTreeViewCheckChange,
    TreeViewCheckDescriptor, TreeViewCheckChangeEvent,
} from '@progress/kendo-react-treeview';

const tree = [{
    text: 'Item1', expanded: true,
    items:
        [{ text: 'Item1.1' },
        { text: 'Item1.2', expanded: true, items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }] }],
}, {
    text: 'Item2'
}, {
    text: 'Item3'
}];

interface AppState {
    items: any[];
    singleMode: boolean;
    checkChildren: boolean;
    checkParents: boolean;
    check: TreeViewCheckDescriptor;
}

class TreeViewCheckboxesDemo extends React.Component<{}, AppState> {
    state = {
        items: tree,
        singleMode: false,
        checkChildren: false,
        checkParents: false,
        check: { ids: [], applyCheckIndeterminate: true }
    };
    render() {
        const labelStyle = { marginRight: 5 };

        return (
            <div>
                <div className="example-config">
                    <h5>Check Settings</h5>
                    <input
                        id="singleMode"
                        type="checkbox"
                        checked={this.state.singleMode}
                        onChange={this.onSingleModeChange}
                        className="k-checkbox"
                    />
                    <label htmlFor="singleMode" className="k-checkbox-label" style={labelStyle}>
                        Single mode
                    </label>
                    <input
                        id="checkChildren"
                        type="checkbox"
                        checked={this.state.checkChildren}
                        onChange={this.onCheckChildrenChange}
                        className="k-checkbox"
                    />
                    <label htmlFor="checkChildren" className="k-checkbox-label" style={labelStyle}>
                        Check all children
                    </label>
                    <input
                        id="checkParents"
                        type="checkbox"
                        checked={this.state.checkParents}
                        onChange={this.onCheckParentsChange}
                        className="k-checkbox"
                    />
                    <label htmlFor="checkParents" className="k-checkbox-label" style={labelStyle}>
                        Check all parents when children are checked
                    </label>
                </div>
                <TreeView
                    data={processTreeViewItems(this.state.items, { check: this.state.check })}
                    checkboxes={true}
                    onCheckChange={this.onCheckChange}
                />
                <div style={{ marginTop: 5 }}>
                    <i>Press SPACE to check/uncheck the active item</i>
                    <div className="example-config">
                        Checked indices: {(this.state.check as any).ids.join(",")}
                    </div>
                </div>
            </div>
        );
    }

    onSingleModeChange = ({ target: { checked } }) => {
        let { checkChildren, checkParents } = this.state;
        if (checked) {
            checkChildren = checkParents = false;
        }
        this.setState({ singleMode: checked, checkChildren, checkParents });
    }
    onCheckChildrenChange = ({ target: { checked } }) => {
        let { singleMode } = this.state;
        if (checked) {
            singleMode = false;
        }
        this.setState({ singleMode, checkChildren: checked });
    }
    onCheckParentsChange = ({ target: { checked } }) => {
        let { singleMode } = this.state;
        if (checked) {
            singleMode = false;
        }
        this.setState({ singleMode, checkParents: checked });
    }
    onCheckChange = (event: TreeViewCheckChangeEvent) => {
        const { singleMode, checkChildren, checkParents } = this.state;
        const settings = { singleMode, checkChildren, checkParents };
        this.setState({ check: handleTreeViewCheckChange(event, this.state.check, this.state.items, settings) });
    }
}

export default TreeViewCheckboxesDemo;
