import * as React from 'react';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';

class DateTimePickerDemo extends React.Component<{}, any> {
    _picker;

    constructor(props: any) {
        super(props);

        this.state = {
            value: new Date(),
            show: false,
            manualShow: false
        };
    }
    componentDidMount() {
        this._picker.element.focus();
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
            show: event.target.show
        });
    }
    handleFocus = () => {
        // tslint:disable-next-line
        console.log('focus');
    }
    handleBlur = () => {
        // tslint:disable-next-line
        console.log('blur');
    }
    render() {
        return (
            <div>
                <div className="basic" style={{ marginBottom: '20px' }}>
                    <DateTimePicker
                        ref={(el) => { this._picker = el; }}
                        // show={true}
                        // cancelButton={false}
                    />
                    <button className="dummy" />
                </div>
                <div className="controlled" style={{ marginBottom: '20px' }}>
                    <DateTimePicker
                        value={this.state.value}
                        show={this.state.show}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                    />
                    <button
                        className="k-button k-primary"
                        onClick={() => {
                            this.setState({ show: !this.state.show });
                        }}
                    >
                        Manual Toggle
                    </button>
                </div>
                <div className="read-only" style={{ marginBottom: '20px' }}>
                    <DateTimePicker
                        show={false}
                        value={new Date()}
                    />
                </div>
                <div className="manual-only">
                    <DateTimePicker
                        show={this.state.manualShow}
                    />
                    <button
                        className="manual"
                        onClick={() => {
                            this.setState({ manualShow: !this.state.manualShow });
                        }}
                    >
                        Manual Toggle
                    </button>
                </div>
            </div>
        );
    }
}

export default DateTimePickerDemo;
