import * as React from 'react';
import { getDomId } from './misc';

export default function ItemRender(props: any) {
    return <span id={getDomId(props.itemId)}>{props.item.text}</span>;
}
