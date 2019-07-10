import * as React from 'react';
import { Grid, GridColumn, GridExpandChangeEvent, GridDetailRow, GridToolbar, GridColumnProps } from '@progress/kendo-react-grid';
import { process, State, DataResult } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';
import sampleProducts from './utils/sampleProducts';

interface AppState {
    dataState: State;
    result: DataResult;
    cols: GridColumnProps[];
}

class GridDemo extends React.PureComponent<{}, AppState> {
    localData = sampleProducts.slice();
    expandField = 'Expanded';

    _col = null;

    constructor(props: any) {
        super(props);
        this.state = this.createAppState({ skip: 0, take: 10 });
        this.expandChange = this.expandChange.bind(this);
        this.dataStateChange = this.dataStateChange.bind(this);
    }

    dataStateChange(event) {
        this.setState(this.createAppState(event.data));
    }

    expandChange(event: GridExpandChangeEvent) {
        event.dataItem[this.expandField] = event.value;
        this.forceUpdate();
    }

    createAppState(dataState: State = {}): AppState {
        const groups = dataState.group;
        if (groups) { groups.map(group => group.aggregates = [{ field: 'UnitsInStock', aggregate: 'sum' }]); }

        return {
            result: process(this.localData, dataState),
            dataState: dataState,
            cols: this.state && this.state.cols || [
                { field: 'ProductID', title: 'ID', filter: 'numeric' },
                {
                    field: 'ProductName', title: 'Product Name',
                    reorderable: false
                },
                {
                    field: 'QuantityPerUnit', title: 'Quantity Per Unit',
                    groupable: false
                },
                {
                    field: 'UnitsInStock', title: 'Units In Stock', filter: 'numeric',
                    reorderable: false,
                    groupable: false
                },
                { field: 'Category.CategoryName', title: 'Category Name' }
            ]
        };
    }

    render() {

        const cols = this.state.cols.map((c, index) => {
            return (
                <GridColumn key={index}  {...c} />
            );
        });

        const gr = (
            <Grid
                data={this.state.result}
                {...this.state.dataState}

                resizable={true}
                reorderable={true}
                filterable={true}
                sortable={true}
                pageable={{ pageSizes: true }}
                groupable={{ footer: 'visible' }}
                detail={GridDetailRow}

                onDataStateChange={this.dataStateChange}
                onExpandChange={this.expandChange}
                expandField={this.expandField}

                onColumnReorder={(e) => {
                    this.setState({
                        ...this.state,
                        cols: e.columns
                    });
                }}
                onColumnResize={(e) => {
                    // const { columns, target, nativeEvent, ...other } = e;
                    // console.log(JSON.stringify(other));
                    if (e.end) {
                        this.setState({
                            ...this.state,
                            cols: e.columns
                        });
                    }
                }}
            >
                <GridToolbar>
                    <span>Grid Toolbar</span>
                </GridToolbar>
                {cols}
            </Grid>
        );
        return (
            <div>
                {gr}
            </div>
        );
    }
}

export default GridDemo;
