import * as React from 'react';
import { addMonths } from '@progress/kendo-date-math';
import '@progress/kendo-theme-default/dist/all.css';
import { Calendar, CalendarChangeEvent } from '@progress/kendo-react-dateinputs';

export interface CustomAppState {
    value: Date;
    dummyDate: Date;
}

class CalendarDemo extends React.Component<{}, CustomAppState> {
    constructor(props: any) {
        super(props);

        this.state = { value: new Date(2017, 0, 1), dummyDate: new Date(2017, 1, 1) };
    }

    render() {
        let result = (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Calendar</td>
                            <td>Calendar with value/onChange</td>
                            <td>Calendar with value</td>
                            <td>Calendar with onChange</td>
                        </tr>
                        <tr>
                            <td>
                                <Calendar />
                            </td>
                            <td>
                                <Calendar
                                    value={this.state.value}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <Calendar
                                    value={this.state.value}
                                />
                            </td>
                            <td>
                                <Calendar
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>Calendar with focusedDate</td>
                            <td>Calendar with value/onChange/focusedDate</td>
                            <td>Calendar with value/focusedDate</td>
                            <td>Calendar with onChange/focusedDate</td>
                        </tr>
                        <tr>
                            <td>
                                <Calendar focusedDate={this.state.value} />
                            </td>
                            <td>
                                <Calendar
                                    value={this.state.value}
                                    onChange={this.onChange}
                                    focusedDate={this.state.value}
                                />
                            </td>
                            <td>
                                <Calendar
                                    value={this.state.value}
                                    focusedDate={this.state.value}
                                />
                            </td>
                            <td>
                                <Calendar
                                    onChange={this.onChange}
                                    focusedDate={this.state.value}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button onClick={() => { this.setState({ value: addMonths(this.state.value, 1) }); }}>
                        Increment value</button>
                    <br />
                    <button onClick={() => { this.setState({ dummyDate: addMonths(this.state.dummyDate, 1) }); }}>
                        Re-render all components</button>
                    <br />
                    <span>Value: {this.state.value && this.state.value.toDateString()}</span>
                </div>
            </div>
        );

        return result;
    }

    onChange = (event: CalendarChangeEvent) => {
        this.setState({ value: event.value, dummyDate: event.value });
    }
}

export default CalendarDemo;
