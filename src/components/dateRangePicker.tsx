import * as React from 'react';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';

class DateRangePickerDemo extends React.Component<{}, any> {
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
                    <DateRangePicker
                        ref={(el) => { this._picker = el; }}
                        startDateInputSettings={{
                            id: 'start'
                        }}
                        endDateInputSettings={{
                            id: 'end'
                        }}
                    // show={true}
                    />
                    <button className="dummy" />
                </div>
                <div className="allowReverse" style={{ marginBottom: '20px' }}>
                    <DateRangePicker
                        allowReverse={true}
                        swapButton={true}
                        startDateInputSettings={{
                            id: 'start'
                        }}
                        endDateInputSettings={{
                            id: 'end'
                        }}
                    />
                </div>
                <div className="controlled" style={{ marginBottom: '20px' }}>
                    <DateRangePicker
                        value={this.state.value}
                        show={this.state.show}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        startDateInputSettings={{
                            id: 'start'
                        }}
                        endDateInputSettings={{
                            id: 'end'
                        }}
                    />
                    <button
                        className="k-button k-primary"
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                        onClick={() => {
                            this.setState({ show: !this.state.show });
                        }}
                    >
                        Manual Toggle
                    </button>
                </div>
                <div className="read-only" style={{ marginBottom: '20px' }}>
                    <DateRangePicker
                        show={false}
                        value={{ start: new Date(2018, 8, 8), end: new Date(2018, 8, 9) }}
                        startDateInputSettings={{
                            id: 'start'
                        }}
                        endDateInputSettings={{
                            id: 'end'
                        }}
                    />
                </div>
                <div className="manual-only">
                    <DateRangePicker
                        show={this.state.manualShow}
                        startDateInputSettings={{
                            id: 'start'
                        }}
                        endDateInputSettings={{
                            id: 'end'
                        }}
                    />
                    <button
                        className="manual"
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
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

export default DateRangePickerDemo;
