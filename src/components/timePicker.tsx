import * as React from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';

class TimePickerDemo extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: new Date(),
            show: true,
        };
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
            show: event.target.show
        });
    }
    render() {
        return (
            <div>
                <div className="controlled" style={{ marginBottom: '20px' }}>
                    <TimePicker
                        value={this.state.value}
                        show={this.state.show}
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
            </div>
        );
    }
}

export default TimePickerDemo;
