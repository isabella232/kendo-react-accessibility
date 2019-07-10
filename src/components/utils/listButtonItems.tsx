import * as React from 'react';
import { SplitButtonItem, DropDownButtonItem, ButtonItem } from '@progress/kendo-react-buttons';

const imageUrl = 'https://demos.telerik.com/kendo-ui/content/web/toolbar/save.png';

// EXPORTED CONSTS SHOULD BE KEPT IN SYNC.
export const models: ButtonItem[] = [
    { text: 'item1' },
    { text: 'item2', render: ItemRender },
    { text: 'item3', disabled: true },
    { text: 'item4', icon: 'pdf' },
    { text: 'item5', iconClass: 'myCustomClass' },
    { text: 'item6', imageUrl }
];
export const splitBtnChildren = ([
    (<SplitButtonItem text="item1" key="0" />),
    (<SplitButtonItem text="item2" render={ItemRender} key="1" />),
    (<SplitButtonItem text="item3" disabled={true} key="2" />),
    (<SplitButtonItem text="item4" icon="pdf" key="3" />),
    (<SplitButtonItem text="item5" iconClass="myCustomClass" key="4" />),
    (<SplitButtonItem text="item6" imageUrl={imageUrl} key="5" />)
]);
export const dropdownBtnChildren = ([
    (<DropDownButtonItem text="item1" key="0" />),
    (<DropDownButtonItem text="item2" render={ItemRender} key="1" />),
    (<DropDownButtonItem text="item3" disabled={true} key="2" />),
    (<DropDownButtonItem text="item4" icon="pdf" key="3" />),
    (<DropDownButtonItem text="item5" iconClass="myCustomClass" key="4" />),
    (<DropDownButtonItem text="item6" imageUrl={imageUrl} key="5" />)
]);

function ItemRender(props: any) {
    return <span id={`id${props.itemIndex}`}>{props.item.text}</span>;
}
