import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Input } from '@progress/kendo-react-inputs';

interface AppState {
    value: string;
}

class InputDemo extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: ''
        };
    }
    handleChange = (event) => {
        this.setState({ value: (event.target as HTMLInputElement).value });
    }
    render() {
        return (
            <div className="row input">
                <div className="cold-md-3 uncontrolled input-basic">
                    <h5>Uncontrolled Input</h5>
                    <Input label="foo"/>
                    <hr />
                </div>
                <div className="cold-md-3 defaultValue input-default-value">
                    <h5>Uncontrolled Input with defaultValue</h5>
                    <Input defaultValue="11" pattern=".{5,12}" label="secret weapon" />
                    <hr />
                </div>
                <div className="cold-md-3 placeholder">
                    <h5>Uncontrolled Input with placeholder</h5>
                    <Input label={'First name'} placeholder={'Pesho'} />
                    <hr />
                </div>
                <div className="cold-md-3 controlled">
                    <h5>Controlled Input</h5>
                    <Input label="bar" value={this.state.value} onChange={this.handleChange} />
                    <hr />
                </div>
                <div className="cold-md-3 static">
                    <h5>Controlled Input with hard coded value</h5>
                    <Input label="bar" value="always the same" />
                </div>
            </div>
        );
    }
}

export default InputDemo;
