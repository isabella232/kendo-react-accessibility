import * as React from 'react';
import { MultiSelect, MultiSelectChangeEvent, MultiSelectProps,
    MultiSelectFilterChangeEvent, MultiSelectPageChangeEvent,
    VirtualizationSettings, MultiSelectTagData as TagData
} from '@progress/kendo-react-dropdowns';
import { filterBy } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';

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

const objectsData: Array<{text: string, value: string}> = countries.map((c) => {
    return { text: c, value: c.toLowerCase() };
});

const pageSize = 10;

interface AppState {
    allowCustom?: boolean;
    animate?: boolean;
    filterable?: boolean;
    filter?: any;
    disabled?: boolean;
    opened?: boolean;
    value?: Array<any>;
    data?: Array<any>;
    virtualData?: Array<any>;
    filteredData?: Array<any>;
    skip?: number;
    total?: number;
    tags?: Array<TagData>;
    objectValue?: Array<any>;
}

class MultiSelectDemo extends React.Component<any, AppState> {
    state: AppState;

    constructor(props: any) {
        super(props);

        this.state = {
            allowCustom: false,
            disabled: false,
            animate: false,
            filterable: false,
            filter: '',
            opened: false,
            data: countries,
            value: [], // 'Andorra'
            objectValue: [],
            virtualData: countries.slice(0, pageSize),
            filteredData: countries,
            skip: 0,
            total: countries.length
        };
    }

    checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.checked
        });
    }

    onChange = (event: MultiSelectChangeEvent) => {
        this.setState({
            value: event.target.value
        });
    }
    onChangeObj = (event: MultiSelectChangeEvent) => {
        const values = event.target.value;
        const lastItem = values[values.length - 1];

        if (this.state.allowCustom && lastItem && lastItem.value === undefined) {
            values.pop();
            const sameItem = values.find(value => value.text === lastItem.text);
            if (sameItem === undefined) {
                lastItem.value = lastItem.text;
                values.push(lastItem);
            }
        }

        this.setState({
            objectValue: values
        });
    }
    onFilterChange = (event: MultiSelectFilterChangeEvent) => {
        const filtered = event.filter.value ? filterBy(countries, event.filter) : countries;

        this.setState({
            filteredData: filtered,
            virtualData: filtered.slice(0, pageSize),
            skip: 0,
            filter: event.filter.value
        });
        this.logEvent('onFilterChange');
    }

    onPageChange = (event: MultiSelectPageChangeEvent) => {
        const skip = event.page.skip;
        const take = event.page.take;
        const data = this.state.filterable ? (this.state.filteredData || []) : countries;

        this.setState({
            skip: skip,
            total: countries.length,
            virtualData: data.slice(skip, skip + take)
        });
        this.logEvent('onPageChange');
    }

    tagRender = (_tagData: TagData, li: React.ReactElement<HTMLLIElement>):
        React.ReactElement<HTMLLIElement>|null => {
        return li;
    }

    // tslint:disable-next-line:no-console
    logEvent = (event: string) => { console.log(event); };

    render() {
        const commonProps: MultiSelectProps = {
            data: this.state.filterable ? this.state.filteredData : this.state.data,
            allowCustom: this.state.allowCustom,
            popupSettings: { animate: this.state.animate },
            disabled: this.state.disabled,
            className: 'uncontrolled',
            style: { width: '800px' },
            filterable: this.state.filterable,
            filter: this.state.filterable ? this.state.filter : undefined,
            onFilterChange: this.state.filterable ? this.onFilterChange : undefined
        };

        const controlledProps: MultiSelectProps = {
            value: this.state.value,
            onChange: this.onChange,
            className: 'controlled'
        };

        const events: MultiSelectProps = {
            onFocus: () => { this.logEvent('onFocus'); },
            onBlur: () => { this.logEvent('onBlur'); },
            onOpen: () => { this.logEvent('onOpen'); },
            onClose: () => { this.logEvent('onClose'); }
        };

        const virtualProps: MultiSelectProps = {
            virtual: {
                pageSize: pageSize,
                skip: this.state.skip,
                total: this.state.total
            } as VirtualizationSettings,
            data: this.state.virtualData,
            onPageChange: this.onPageChange
        };

        return (
            <div>
                <div>
                    {this.renderInput('filterable')} Filterable<br />
                    {this.renderInput('disabled')} Disable<br />
                    {this.renderInput('allowCustom')} AllowCustom<br />
                    {this.renderInput('animate')} Animate<br />
                </div>
                <div className="normal-scroll" style={{ position: 'relative' }}>
                    <br /><br />
                    Controlled: <br />
                    <MultiSelect
                        {...commonProps}
                        {...controlledProps}
                        {...events}
                        placeholder="Select ..."
                        style={{ width: '400px' }}
                    />
                    <br /><br />
                    <input type="text" defaultValue="test" />
                    <br /><br />
                    Focus and Blur: <br />
                    <MultiSelect
                        {...commonProps}
                        {...events}
                        placeholder="Select ..."
                        opened={this.state.opened}
                        onBlur={() => { this.setState({opened: false}); }}
                        onFocus={() => { this.setState({opened: true}); }}
                    />
                    <br /><br /><br /><br />
                    UnControlled: <br />
                    <MultiSelect {...commonProps} />
                    <br /><br /><br /><br />
                    Virtual Controlled: <br />
                    <MultiSelect
                        {...commonProps}
                        {...controlledProps}
                        {...virtualProps}
                    />
                    <ul style={{ position: 'absolute', left: '900px' }}>
                        {(this.state.virtualData || []).map(i => <li key={i}>{i}</li>)}
                    </ul>
                    <br /><br /><br /><br />
                    Virtual UnControlled: <br />
                    <MultiSelect
                        {...commonProps}
                        {...virtualProps}
                    />
                    <br /><br /><br /><br />
                    Objects data with different references: <br />
                    <MultiSelect
                        data={[...objectsData.map(v => Object.assign({}, v))]}
                        value={[...this.state.objectValue!.map(v => Object.assign({}, v))]}
                        onChange={this.onChangeObj}
                        allowCustom={this.state.allowCustom}
                        dataItemKey="value"
                        textField="text"
                        style={{ width: '800px' }}
                    />
                    <br /><br /><br /><br />
                    Summary-Tag Mode: <br />
                    <MultiSelect
                        {...commonProps}
                        tagRender={this.tagRender}
                        value={this.state.value}
                        onChange={(event) => {
                            const value = [...event.target.value];
                            let tags: Array<TagData> = [];
                            if (value.length > 1) {
                                const tagsValues: Array<any> = [...value];
                                const first: any = tagsValues.shift();
                                tags = [
                                    { text: first, data: [first] },
                                    { text: `${tagsValues.length} other selected`, data: [...tagsValues] }
                                ];
                            }
                            this.setState({
                                value: value,
                                tags: tags
                            });
                        }}
                        tags={this.state.tags}
                    />
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

export default MultiSelectDemo;
