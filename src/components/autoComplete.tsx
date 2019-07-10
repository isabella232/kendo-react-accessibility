import * as React from 'react';
import { AutoComplete, AutoCompleteProps, AutoCompleteChangeEvent
} from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';

const objectsData = [
    { text: 'Albania', value: 'Alb' },
    { text: 'Andorra', value: 'And' },
    { text: 'Armenia', value: 'Arm' },
    { text: 'Austria', value: 'Aus' },
    { text: 'Azerbaijan', value: 'Aze' }
];

const countries: Array<string> = [
    'Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    'Bosnia & Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine',
    'United Kingdom',
    'Albania2',
    'Vatican City'
];

interface AppState {
    filterable?: boolean;
    suggest?: boolean;
    suggestion?: string;
    disabled?: boolean;
    value?: string;
    data?: Array<string>;
}

class AutoCompleteDemo extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            suggest: false,
            disabled: false,
            filterable: false,
            data: countries,
            suggestion: '',
            value: ''
        };
    }

    checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.checked
        });
    }

    filterData(data: any[], filterText: string) {
        const filter: FilterDescriptor = {
            value: filterText,
            operator: 'startswith',
            ignoreCase: true
        };
        return filterText ? filterBy(data, filter) : data;
    }

    onChange = (event: AutoCompleteChangeEvent) => {
        const suggestion = event.suggestion;
        const value = event.target.value;
        const filterValue = suggestion ? suggestion.userInput : value;
        const data = this.state.filterable ? this.filterData(countries.slice(), filterValue) : countries;

        this.setState({
            value: value,
            data: data,
            suggestion: suggestion ? suggestion.value : undefined
        });
    }

    render() {
        const commonProps: AutoCompleteProps = {
            placeholder: 'e.g. Denmark',
            suggest: this.state.suggest ? this.state.suggestion : false,
            data: countries,
            disabled: this.state.disabled,
            className: 'uncontrolled',
            popupSettings: { animate: false }
        };

        const controlledProps: AutoCompleteProps = {
            value: this.state.value,
            onChange: this.onChange,
            data: this.state.data,
            className: 'controlled'
        };

        return (
            <div>
                <div>
                    {this.renderInput('suggest')} Suggest<br />
                    {this.renderInput('filterable')} Filterable<br />
                    {this.renderInput('disabled')} Disable<br />
                </div>
                <div className="normal-scroll">
                    <p>Type the name of a European country:</p>
                    Controlled: &nbsp;
                    <AutoComplete {...commonProps} {...controlledProps} />
                    &nbsp; &nbsp; &nbsp;
                    Uncontrolled: &nbsp;
                    <AutoComplete {...commonProps} />
                    &nbsp; &nbsp; &nbsp;
                    Objects data: &nbsp;
                    <AutoComplete {...commonProps} data={objectsData} textField="text" />
                    &nbsp; &nbsp; &nbsp;
                    Uncontrolled Suggestions: &nbsp;
                    <span className="uncontrolled-suggestions">
                        <AutoComplete
                            data={countries}
                            suggest={true}
                            placeholder={'e.g. Austria'}
                            popupSettings={{ animate: false }}
                        />
                    </span>
                </div>
            </div>
        );
    }

    renderInput = (name: string) => {
        return (
            <input
                type="checkbox"
                name={name}
                checked={this.state[name]}
                onChange={this.checkboxHandler}
            />
        );
    }
}

export default AutoCompleteDemo;
