import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';

const cars = [
    { text: 'Audi', value: '1' },
    { text: 'BMW', value: '2' },
    { text: 'Chevrolet', value: '3' },
    { text: 'Citroen', value: '4' },
    { text: 'E-Class Benz', value: '5' }
];

const defaultItem = { text: 'Select car...', value: null };
const textField = 'text';
const dataItemKey = 'value';

class DropDownListDemo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            defaultItem: false,
            disabled: false,
            filterable: false,
            animate: false,
            data: [...cars]
        };

        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    checkboxHandler(e) {
        this.setState({
            [e.target.name]: e.target.checked
        });
    }

    filterData(data: any[], filter: FilterDescriptor) {
        return filterBy(data.slice(), filter);
    }

    onFilterChange(event) {
        const filter = event.filter;
        const data = this.filterData(cars, filter);

        this.setState({
            data: data,
            filter: filter.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input type="checkbox" name="defaultItem" onChange={this.checkboxHandler} /> Default Item<br />
                    <input type="checkbox" name="disabled" onChange={this.checkboxHandler} /> Disabled<br />
                    <input type="checkbox" name="filterable" onChange={this.checkboxHandler} /> Filterable<br />
                    <input type="checkbox" name="animate" onChange={this.checkboxHandler} /> Animate<br />
                </div>
                <DropDownList
                    data={this.state.data}
                    dataItemKey={dataItemKey}
                    textField={textField}
                    defaultItem={this.state.defaultItem ? defaultItem : undefined}
                    disabled={this.state.disabled}
                    filterable={this.state.filterable}
                    onFilterChange={this.onFilterChange}
                    filter={this.state.filter}
                    popupSettings={{ animate: this.state.animate }}
                />
            </div>
        );
    }
}

export default DropDownListDemo;
