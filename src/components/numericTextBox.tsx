import * as React from 'react';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import '@progress/kendo-theme-default/dist/all.css';

class NumericTextBoxDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div className="numeric">
                    <h5>NumericTextBox with Label</h5>
                    <hr />
                    <div className="container numeric-basic">
                        <p>Basic</p>
                        <NumericTextBox label="foo" />
                    </div>
                    <div className="container numeric-placeholder">
                        <p>...with placeholder</p>
                        <NumericTextBox id="foo" placeholder="placeholder" label="with placeholder" />
                    </div>
                    <div className="container numeric-default-value">
                        <p>...with defaultValue</p>
                        <NumericTextBox id="foo" defaultValue={42} format="c2" label="with default value" />
                    </div>
                </div>
                {/* Dummy element for simulate blur in e2e tests */}
                <button className="input-basic" />
            </div>
        );
    }
}

export default NumericTextBoxDemo;
