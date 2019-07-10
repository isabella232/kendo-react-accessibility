import * as React from 'react';
import { ComboBox, ComboBoxFilterChangeEvent, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';

const cars = ['Audi', 'BMW', 'Chevrolet', 'Citroen', 'E-Class Benz'];

class ComboBoxDemo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            disabled: false,
            filterable: false,
            allowCustom: false,
            suggest: false,
            animate: false,
            value: null,
            changeCount: 0,
            data: [...cars]
        };

        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    checkboxHandler(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            [e.target.name]: e.target.checked
        });
    }

    filterData(data: any[], filter: FilterDescriptor) {
        return filterBy(data.slice(), filter);
    }

    onFilterChange(event: ComboBoxFilterChangeEvent) {
        const data = this.filterData(cars, event.filter);
        this.setState({
            data: data
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type="checkbox"
                        name="disabled"
                        onChange={this.checkboxHandler}
                        checked={this.state.disabled}
                    /> Disabled<br />
                    <input
                        type="checkbox"
                        name="filterable"
                        onChange={this.checkboxHandler}
                        checked={this.state.filterable}
                    /> Filterable<br />
                    <input
                        type="checkbox"
                        name="allowCustom"
                        onChange={this.checkboxHandler}
                        checked={this.state.allowCustom}
                    /> AllowCustom<br />
                    <input
                        type="checkbox"
                        name="animate"
                        onChange={this.checkboxHandler}
                        checked={this.state.animate}
                    /> Animate<br />
                    <input
                        type="checkbox"
                        name="suggest"
                        onChange={this.checkboxHandler}
                        checked={this.state.suggest}
                    /> Suggestions<br />
                </div>
                <br /><br />
                ComboBox controlled - change <span id="onChangeCount">{this.state.changeCount}</span><br />
                <ComboBox
                    data={this.state.data}
                    disabled={this.state.disabled}
                    clearButton={true}
                    className={'controlled'}
                    filterable={this.state.filterable}
                    onFilterChange={this.onFilterChange}
                    onChange={(event: ComboBoxChangeEvent) => {
                        this.setState({
                            value: event.target.value,
                            changeCount: this.state.changeCount + 1
                        });
                    }}
                    // onFocus={() => window.console.log('onFocus')}
                    // onBlur={() => window.console.log('onBlur')}
                    dir={'ltr'}
                    allowCustom={this.state.allowCustom}
                    suggest={this.state.suggest}
                    value={this.state.value}
                    popupSettings={{ animate: this.state.animate }}
                />
                &nbsp;&nbsp;&nbsp;
                <input type={'text'} id={'comboValue'} value={this.state.value || ''} readOnly={true} />
                <br />
                <br />
                <br />
                <br />
                ComboBox uncontrolled<br />
                <ComboBox
                    data={this.state.data}
                    className={'uncontrolled'}
                    allowCustom={this.state.allowCustom}
                    suggest={this.state.suggest}
                    filterable={this.state.filterable}
                    onFilterChange={this.onFilterChange}
                    popupSettings={{ animate: this.state.animate }}
                />
                <br />
                <br />
                <br />
                <br />
                ComboBox with defaultValue<br />
                <ComboBox
                    data={[...cars]}
                    className={'defaultValue'}
                    defaultValue={'Audi'}
                    popupSettings={{ animate: this.state.animate }}
                />
                <br />
                <br />
                <br />
                <br />
                ComboBox with static value and style<br />
                <ComboBox
                    data={[...cars]}
                    className={'static'}
                    value={'Audi'}
                    onChange={() => { this.setState({ value: 'Audi' }); }}
                    style={{display: 'block'}}
                    popupSettings={{ animate: this.state.animate }}
                />
            </div>
        );
    }
}

export default ComboBoxDemo;
