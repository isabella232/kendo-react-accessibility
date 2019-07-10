import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import {
    TreeView,
    TreeViewDragClue,
    TreeViewItemDragOverEvent,
    TreeViewItemDragEndEvent,
    moveTreeViewItem,
    TreeViewDragAnalyzer
} from '@progress/kendo-react-treeview';

const SEPARATOR = '_';
const tree = [{
    text: 'Item0', expanded: true, items: [
        { text: 'Item0_0', expanded: true }, { text: 'Item0_1', expanded: true, items: [{ text: 'Item0_1_0' }, { text: 'Item0_1_1' }] }]
}, {
    text: 'Item1', expanded: true, items: [
        { text: 'Item1_0', expanded: true }, { text: 'Item1_1', expanded: true }]
}];

const tree2 = [{
    text: 'Item0', expanded: true, items: [
        { text: 'Item0_0', expanded: true }, { text: 'Item0_1', expanded: true, items: [{ text: 'Item0_1_0' }, { text: 'Item0_1_1' }] }]
}, {
    text: 'Item1', expanded: true, items: [
        { text: 'Item1_0', expanded: true }, { text: 'Item1_1', expanded: true }]
}];

function getSiblings(itemIndex: string, data: any[]): any[] {
    let result = data;

    const indices = itemIndex.split(SEPARATOR).map(index => Number(index));
    for (let i = 0; i < indices.length - 1; i++) {
        result = result[indices[i]].items;
    }

    return result;
}

class TreeViewDemo extends React.Component<any, any>{
    dragClue: any;
    treeView1Guid: string | null;
    treeView2Guid: string | null;

    dragOverCnt = 0;
    isDragDrop = false;

    state = { tree, tree2 };

    render() {
        return (
            <div>
                <TreeView data={this.state.tree} expandIcons={true}
                    onExpandChange={this.onExpandChange} onItemClick={this.onItemClick}
                    draggable={true}
                    onItemDragOver={this.onItemDragOver} onItemDragEnd={this.onItemDragEnd}
                    ref={treeView => this.treeView1Guid = treeView && treeView.guid}
                />
                <TreeView data={this.state.tree2} expandIcons={true}
                    onExpandChange={this.onExpandChange} onItemClick={this.onItemClick}
                    draggable={true}
                    onItemDragOver={this.onItemDragOver} onItemDragEnd={this.onItemDragEnd}
                    ref={treeView => this.treeView2Guid = treeView && treeView.guid}
                />
                <TreeViewDragClue ref={dragClue => this.dragClue = dragClue} />
            </div>
        );
    }

    onItemClick = (e) => {
        if (!this.isDragDrop) {
            e.item.selected = !e.item.selected;
            this.forceUpdate();
        }
    }
    onExpandChange = (e) => {
        e.item.expanded = !e.item.expanded;
        this.forceUpdate();
    }
    onItemDragOver = (event: TreeViewItemDragOverEvent) => {
        this.dragOverCnt++;
        this.dragClue.show(event.pageY + 10, event.pageX, event.item.text, this.getClueClassName(event));
    }

    onItemDragEnd = (event: TreeViewItemDragEndEvent) => {
        this.isDragDrop = this.dragOverCnt > 0;
        this.dragOverCnt = 0;
        this.dragClue.hide();

        const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
        const { itemHierarchicalIndex: destItemHierarchicalIndex, treeViewGuid: destTreeViewGuid } = eventAnalyzer.destinationMeta;

        if (eventAnalyzer.isDropAllowed) {
            const { sourceData, targetData } = moveTreeViewItem(
                event.itemHierarchicalIndex,
                this.resolveData(event.target.guid),
                eventAnalyzer.getDropOperation()!,
                destItemHierarchicalIndex,
                this.resolveData(destTreeViewGuid),
            ) as { sourceData: any[]; targetData: any[] };

            this.setState({
                [this.resolveDataKey(event.target.guid)]: sourceData,
                [this.resolveDataKey(destTreeViewGuid)]: targetData
            });
        }
    }

    getClueClassName(event: TreeViewItemDragOverEvent) {
        const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
        const { itemHierarchicalIndex: itemIndex, treeViewGuid } = eventAnalyzer.destinationMeta;

        if (eventAnalyzer.isDropAllowed) {
            switch (eventAnalyzer.getDropOperation()) {
                case 'child':
                    return 'k-i-plus';
                case 'before':
                    return itemIndex === '0' || itemIndex.endsWith(`${SEPARATOR}0`) ?
                        'k-i-insert-up' : 'k-i-insert-middle';
                case 'after':
                    const siblings = getSiblings(itemIndex, this.resolveData(treeViewGuid));
                    const lastIndex = Number(itemIndex.split(SEPARATOR).pop());

                    return lastIndex < siblings.length - 1 ? 'k-i-insert-middle' : 'k-i-insert-down';
                default:
                    break;
            }
        }

        return 'k-i-cancel';
    }

    resolveData(treeViewGuid: string) {
        return treeViewGuid === this.treeView1Guid ? this.state.tree : this.state.tree2;
    }

    resolveDataKey(treeViewGuid: string) {
        return treeViewGuid === this.treeView1Guid ? 'tree' : 'tree2';
    }
}

export default TreeViewDemo;
