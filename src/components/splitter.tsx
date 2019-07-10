
import '@progress/kendo-theme-default/dist/all.css';
import * as React from 'react';
import { Splitter, SplitterPaneProps } from '@progress/kendo-react-layout';

interface AppStateProps {
    panes: Array<SplitterPaneProps>;
}

class SplitterDemo extends React.Component<{}, AppStateProps> {
    constructor(props: any) {
        super(props);

        this.state = {
            panes: [{
                collapsible: true,
                size: '50%',
                min: '10%'
            }, {
                collapsible: true,
                size: '20%'
            }, {

            }]
        };
    }

    onLayoutChange = (newPanes) => {
        this.setState({
            panes: newPanes
        });
    }

    render() {
        return (
            <Splitter
                className={'custom class name'}
                onLayoutChange={this.onLayoutChange}
                panes={this.state.panes}
                style={{height: 400}}
            >
                <div style={{padding: 5}}>Content 1</div>
                <div style={{padding: 5}}>Content 2</div>
                <div style={{padding: 5}}>Content 3</div>
            </Splitter>
        );
    }
}

export default SplitterDemo;
