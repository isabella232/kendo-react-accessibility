import * as React from 'react';
import { registerForIntl, provideIntlService } from '@progress/kendo-react-intl';

class DateFormatter extends React.Component {
    intlSvc: any;

    render() {
        return (
            <div>
                {provideIntlService(this).formatDate(new Date(2000, 10, 6), 'EEEE, d.MM.y')}
            </div>
        );
    }
}

registerForIntl(DateFormatter);

export { DateFormatter };
