import * as React from 'react';
import { MenuItemModel } from '@progress/kendo-react-layout';
import { MenuItem } from '@progress/kendo-react-layout';
import LinkRender from './menuLinkRender';
import { getDomId } from './misc';

const contentRender = (props: any) => <span id={getDomId(props.itemId + '_0')}>Custom content</span>;

// BOTH EXPORTED CONSTS SHOULD BE KEPT IN SYNC.

export const menuChildren = ([
    (
        <MenuItem text="Item0" key="0">
            <MenuItem text="Item0_0" linkRender={LinkRender}>
                <MenuItem text="Item0_0_0" />
                <MenuItem text="Item0_0_1">
                    <MenuItem text="Item0_0_1_0" />
                    <MenuItem text="Item0_0_1_1" />
                    <MenuItem text="Item0_0_1_2" />
                    <MenuItem text="Item0_0_1_3" />
                </MenuItem>
            </MenuItem>
            <MenuItem text="Item0_1">
                <MenuItem text="Item0_1_0" disabled={true}>
                    <MenuItem text="Item0_1_0_0" />
                    <MenuItem text="Item0_1_0_1" />
                </MenuItem>
                <MenuItem text="Item0_1_1" contentRender={contentRender} />
            </MenuItem>
        </MenuItem >
    ),
    (
        <MenuItem text="Item1" key="1">
            <MenuItem text="Item1_0" />
            <MenuItem text="Item1_1" disabled={true} />
            <MenuItem text="Item1_2" />
        </MenuItem >
    ),
    <MenuItem text="Item2" url="https://www.google.bg/" key="2" />,
    (
        <MenuItem text="Item3" disabled={true} key="3" >
            <MenuItem text="Item3_0" />
        </MenuItem >
    )
]);

export const items: MenuItemModel[] = [
    {
        text: 'Item0', items: [
            {
                text: 'Item0_0', items: [
                    { text: 'Item0_0_0' },
                    {
                        text: 'Item0_0_1', items: [
                            { text: 'Item0_0_1_0' },
                            { text: 'Item0_0_1_1' },
                            { text: 'Item0_0_1_2' },
                            { text: 'Item0_0_1_3' }
                        ]
                    }
                ], linkRender: LinkRender
            },
            {
                text: 'Item0_1', items: [
                    {
                        text: 'Item0_1_0', items: [
                            { text: 'Item0_1_0_0' },
                            { text: 'Item0_1_0_1' }
                        ], disabled: true
                    },
                    {
                        text: 'Item0_1_1',
                        contentRender
                    }
                ]
            }
        ]
    }, {
        text: 'Item1', items: [
            { text: 'Item1_0' },
            { text: 'Item1_1', disabled: true },
            { text: 'Item1_2' }
        ]
    }, {
        text: 'Item2', url: 'https://www.google.bg/'
    }, {
        text: 'Item3', disabled: true, items: [
            { text: 'Item3_0' }
        ]
    }
];
