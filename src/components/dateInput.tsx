import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { DateInput } from '@progress/kendo-react-dateinputs';

const styles = {
    marginLeft: '10px',
    marginTop: '10px',
    display: 'inline-block'
};

interface AppState {
    value: Date | null;
    format: string;
}

class DateInputDemo extends React.Component<{}, AppState> {
    interval: number = 0;
    state = { value: new Date(), format: 'D' };

    render() {
        return (
            <div>
                <label style={styles}>
                    <span style={{ width: 170, display: 'inline-block' }}>
                        Value and Change event
                    </span>
                    <DateInput
                        width={250}
                        spinners={true}
                        format={this.state.format}
                        value={this.state.value}
                        onChange={(event) => {
                            const { value } = event;
                            // tslint:disable-next-line: no-console
                            console.log('Date Change', value);

                            this.setState({ value });
                        }}
                    />
                </label>
                <br />
                <label style={styles}>
                    <span style={{ width: 170, display: 'inline-block' }}>
                        Change event
                </span>
                    <DateInput
                        width={250}
                        spinners={true}
                        format={this.state.format}
                        onChange={(event) => {
                            const { value } = event;
                            // tslint:disable-next-line: no-console
                            console.log('Date Change as value only', value);

                            this.setState({ value });
                        }}
                    />
                </label>
                <br />
                <label style={styles}>
                    <span style={{ width: 170, display: 'inline-block' }}>
                        Set format
                    </span>
                    <input
                        type="text"
                        style={{ width: 170 }}
                        value={this.state.format}
                        onChange={(e) => this.setState({ format: e.target.value })}
                    />
                </label>
                <br />
                <button
                    className="k-button"
                    style={styles}
                    onClick={this.startChange}
                >Start Auto Change
                </button>
                <button
                    className="k-button"
                    style={styles}
                    onClick={this.stopChange}
                >Stop Auto Change
                </button>
                <button
                    className="k-button"
                    style={styles}
                    onClick={this.changeDate}
                >Change Date
                </button>
            </div>
        );
    }

    private changeDate = (_?): void => {
        const year = ((Math.random() * 100) / 1);
        const lastFormat = this.state.format;
        let format = lastFormat;

        if (lastFormat === 'D') {
            format = 'dd-yyyy-MM';
        } else if (lastFormat === 'dd-yyyy-MM') {
            format = 'MMMM';
        } else {
            format = 'D';
        }

        this.setState({ value: new Date((2000 + year), 1, 1), format });
    }

    private stopChange = (_): void => {
        window.clearInterval(this.interval);
    }

    private startChange = (_): void => {
        this.interval = window.setInterval(
            () => { this.changeDate(); },
            4000);
    }
}

export default DateInputDemo;
