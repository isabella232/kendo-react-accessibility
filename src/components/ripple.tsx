import * as React from 'react';
import { Ripple } from '@progress/kendo-react-ripple';
import '@progress/kendo-theme-default/dist/all.css';

class RippleDemo extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            disabled: false
        };
    }
    toggleDisabled = () => {
        this.setState({ disabled: !this.state.disabled });
    }
    render() {
        const { disabled } = this.state;
        return (
            <div>
                <p>Toggle disabled ripple state</p>
                <button
                    className="k-button"
                    onClick={this.toggleDisabled}
                >
                    Ripple effect: {`${!disabled}`}
                </button><br />
                <hr />
                <Ripple disabled={disabled}>
                    <div>
                        <p>Ripple on Buttons</p>
                        <button className="k-button">Default Button</button><br /><br />
                        <button className="k-button k-primary">Primary Button</button><br /><br />
                        <button className="k-button k-bare">Bare Button</button>
                    </div>
                    <div>
                        <p>Ripple on Checkboxes</p>
                        <input type="checkbox" id="c1" className="k-checkbox" />
                        <label className="k-checkbox-label" htmlFor="c1">Checkbox 1</label><br />
                        <input type="checkbox" id="c2" className="k-checkbox" />
                        <label className="k-checkbox-label" htmlFor="c2">Checkbox 2</label><br />
                        <input type="checkbox" id="c3" className="k-checkbox" />
                        <label className="k-checkbox-label" htmlFor="c3">Checkbox 3</label>
                    </div>
                    <div>
                        <p>Ripple on Radio Buttons</p>
                        <input type="radio" id="r1" name="rg" className="k-radio" defaultChecked={true} />
                        <label className="k-radio-label" htmlFor="r1" >Radio 1</label><br />
                        <input type="radio" id="r2" name="rg" className="k-radio" />
                        <label className="k-radio-label" htmlFor="r2" >Radio 2</label><br />
                        <input type="radio" id="r3" name="rg" className="k-radio" />
                        <label className="k-radio-label" htmlFor="r3" >Radio 3</label>
                    </div>
                </Ripple>
            </div>
        );
    }
}

export default RippleDemo;
