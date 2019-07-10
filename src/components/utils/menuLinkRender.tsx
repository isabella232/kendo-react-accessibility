import { MenuItemLink, MenuItemArrow } from '@progress/kendo-react-layout';
import * as React from 'react';
import { getDomId } from './misc';

export default function LinkRender(props: any) {
    return (
        <MenuItemLink url={props.item.url} opened={props.opened}>
            <span id={getDomId(props.itemId)}>{props.item.text}</span>
            {props.item.items && props.item.items.length > 0 ?
                <MenuItemArrow itemId={props.itemId} dir={props.dir} /> : null}
        </MenuItemLink>
    );
}
