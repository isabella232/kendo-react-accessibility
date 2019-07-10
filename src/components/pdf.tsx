import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { PDFExport } from '@progress/kendo-react-pdf';
import sampleProducts from './utils/sampleProducts';
import './pdf.css'

class PDFDemo extends React.Component<{}, {}> {
    pdfExportComp: any;

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.exportPDF}>Export pdf</button>

                <PDFExport ref={(comp) => this.pdfExportComp = comp} paperSize="A4">
                    <Grid data={sampleProducts}>
                        <Column field="ProductID" title="ID" width="40px" />
                        <Column field="ProductName" title="Name" width="250px" />
                        <Column field="Category.CategoryName" title="CategoryName" />
                        <Column field="UnitPrice" title="Price" width="80px" />
                        <Column field="UnitsInStock" title="In stock" width="80px" />
                    </Grid>
                </PDFExport>
            </div >
        );
    }

    exportPDF = () => {
        this.pdfExportComp.save();
    }
}

export default PDFDemo;
