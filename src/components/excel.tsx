import * as React from 'react';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './utils/sampleProducts';
import '@progress/kendo-theme-default/dist/all.css';

class ExcelDemo extends React.Component {
    private _export: any;
    export = () => {
        this._export.save(products);
    }
    render() {
        return (
            <div>
                <button className="k-button" onClick={this.export}>EXPORT</button>
                <React.Fragment>
                    <ExcelExport
                        ref={(exporter) => { this._export = exporter; }}
                    >
                        <Grid
                            data={products}
                        >
                            <GridColumn field="ProductID" title="ID" width="40px" />
                            <GridColumn field="ProductName" title="Name" width="250px" />
                            <GridColumn field="Category.CategoryName" title="CategoryName" width="250px" />
                            <GridColumn field="UnitPrice" title="Price" width="50px" />
                            <GridColumn field="UnitsInStock" title="In stock" width="80px" />
                            <GridColumn field="Discontinued" title="Discontinued" width="120px" />
                        </Grid>
                    </ExcelExport>
                </React.Fragment>
            </div>
        );
    }
}

export default ExcelDemo;
