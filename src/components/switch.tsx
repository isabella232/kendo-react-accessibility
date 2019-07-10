import * as React from 'react';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import '@progress/kendo-theme-default/dist/all.css';

class SwitchDemo extends React.Component<{}, any> {
    private _switch;
    constructor(props: any) {
        super(props);

        this.state = {
            checked: true
        };
    }
    componentDidMount() {
        this._switch.element.focus();
    }
    handleChange = (e: SwitchChangeEvent) => {
        // tslint:disable-next-line
        console.log(e.target.value);
        // this.setState({ checked: e.target.value });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4 row">
                    <div className="col-md-8">
                        <h5>Uncontrolled</h5>
                    </div>
                    <div className="col-md-4 m-3 basic">
                        <p>Basic</p>
                        <Switch />
                    </div>
                    <div className="col-md-4 m-3 disabled">
                        <p>Disabled</p>
                        <Switch disabled={true} />
                    </div>
                    <div className="col-md-4 m-3 checked">
                        <p>Default Checked</p>
                        <Switch defaultChecked={true} />
                    </div>
                    <div className="col-md-4 m-3 rtl">
                        <p>RTL</p>
                        <Switch ref={(sw) => { this._switch = sw; }} dir="rtl" />
                    </div>
                    <div className="col-md-4 m-3 parent-rtl" dir="rtl">
                        <p>Parent RTL</p>
                        <Switch />
                    </div>
                    <div className="col-md-8">
                        <h5>Controlled</h5>
                    </div>
                    <div className="col-md-4 m-3">
                        <button
                            className="k-button controlled-button"
                            onClick={() => { this.setState({ checked: !this.state.checked }); }}
                        >Toggle
                        </button>
                    </div>
                    <div className="col-md-4 m-3 controlled">
                        <Switch onChange={this.handleChange} checked={this.state.checked} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SwitchDemo;
