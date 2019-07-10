import * as React from 'react';
import { IntlProvider, load } from '@progress/kendo-react-intl';
import { DateFormatter } from './utils/intlDateFormatter';

loadCldr();

class IntlDemo extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <IntlProvider locale="bg">
                    <DateFormatter />
                </IntlProvider>
            </div>
        );
    }
}

export default IntlDemo;

function loadCldr() {
    load(
        require('cldr-core/supplemental/likelySubtags.json'),
        require('cldr-core/supplemental/currencyData.json'),
        require('cldr-core/supplemental/weekData.json'),
        require('cldr-numbers-full/main/bg/numbers.json'),
        require('cldr-numbers-full/main/bg/currencies.json'),
        require('cldr-dates-full/main/bg/ca-gregorian.json'),
        require('cldr-dates-full/main/bg/dateFields.json'),
        require('cldr-dates-full/main/bg/timeZoneNames.json')
    );
}
