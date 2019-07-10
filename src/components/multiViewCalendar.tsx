import * as React from 'react';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';

class MultiViewCalendarDemo extends React.Component<{}, any> {
    render() {
        return (
            <div>
                <button className="dummy" />
                <div className="basic">
                    <h5>Single</h5>
                    <MultiViewCalendar />
                </div>
                <div className="multiple">
                    <h5>Multiple</h5>
                    <MultiViewCalendar mode="multiple" />
                </div>
                <div className="range">
                    <h5>Range with autocorrect</h5>
                    <MultiViewCalendar mode="range" />
                </div>
            </div>
        );
    }
}

export default MultiViewCalendarDemo;
