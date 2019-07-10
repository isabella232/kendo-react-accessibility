import * as React from 'react';
import { Sortable, SortableItemUIProps } from '@progress/kendo-react-sortable';
import '@progress/kendo-theme-default/dist/all.css';

class CustomComponent extends React.Component<SortableItemUIProps, {}> {
    render() {
        const baseItemStyle = {
            margin: 1,
            padding: 10,
            height: 40,
            width: 350
        };

        const {
            style, attributes, forwardRef, isActive
        } = this.props;

        return (
            <div
                style={{
                    ...baseItemStyle,
                    ...style,
                    background: isActive ? '#27aceb' : '#bfe7f9'
                }}
                {...attributes}
                ref={forwardRef}
                className={this.props.isDisabled ? 'k-state-disabled' : ''}
            >
                {this.props.dataItem.text}
            </div>
        );
    }
}

class SortableDemo extends React.Component<{}, {}> {
    state = {
        data: [
            { id: 1, text: 'item1' },
            { id: 2, text: 'item2' },
            { id: 3, text: 'item3', disabled: true },
            { id: 4, text: 'item4' },
            { id: 5, text: 'item5' },
            { id: 6, text: 'item6' },
            { id: 7, text: 'item7' }
        ]
    };
    index = 0;

    constructor(props: any) {
        super(props);
    }

    swapItems = (newState: object[], source: number, destination: number) => {
        let b = newState[source];

        newState[source] = newState[destination];
        newState[destination] = b;
        source = destination;

        return source;
    }

    onDragOver = (event) => {
        this.setState({
            data: event.newState
        });
    }

    onNavigate = (event) => {
        this.setState({
            data: event.newState
        });
    }

    render() {
        return (
            <div>
                <Sortable
                    idField={'id'}
                    onDragOver={this.onDragOver}
                    // onDragEnd={this.onDragOver}
                    onNavigate={this.onNavigate}
                    data={this.state.data}
                    itemUI={CustomComponent}
                    disabledField={'disabled'}
                    style={{ border: '1px dotted blue', padding: 5, width: 370, display: 'inline-block' }}
                />
            </div>
        );
    }
}

export default SortableDemo;
