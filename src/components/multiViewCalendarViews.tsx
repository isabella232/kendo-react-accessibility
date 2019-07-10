import * as React from 'react';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';

class MultiViewCalendarViewsDemo extends React.Component<{}, any> {
    render() {
        return (
            <div>
                <h5>Single</h5>
                <MultiViewCalendar bottomView="year" />
                <h5>Multiple</h5>
                <MultiViewCalendar mode="multiple" bottomView="century" defaultValue={[new Date()]} />
                <h5>Range without autocorrect</h5>
                <MultiViewCalendar
                    mode="range"
                    bottomView="decade"
                    defaultValue={{ start: new Date(), end: new Date(2021, 0, 1) }}
                />
            </div>
        );
    }
}

export default MultiViewCalendarViewsDemo;
