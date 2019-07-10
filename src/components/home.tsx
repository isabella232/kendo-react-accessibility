import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component<{}, any> {
    render() {
        return (
            <div>
            <NavLink to='/animation'>Animation</NavLink>
            <br />
            <NavLink to='/button'>Button</NavLink>
            <br />
            <NavLink to='/buttonGroup'>ButtonGroup</NavLink>
            <br />
            <NavLink to='/listButton'>DropDownButton and SplitButton</NavLink>
            <br />
            <NavLink to='/chart'>Chart</NavLink>
            <br />
            <NavLink to='/chartElements'>Chart Elements</NavLink>
            <br />
            <NavLink to='/conversationalUI'>Conversational UI</NavLink>
            <br />
            <NavLink to='/calendar'>Calendar</NavLink>
            <br />
            <NavLink to='/dateInput'>DateInput</NavLink>
            <br />
            <NavLink to='/datePicker'>DatePicker</NavLink>
            <br />
            <NavLink to='/dateRangePicker'>DateRangePicker</NavLink>
            <br />
            <NavLink to='/dateTimePicker'>DateTimePicker</NavLink>
            <br />
            <NavLink to='/timePicker'>TimePicker</NavLink>
            <br />
            <NavLink to='/multiViewCalendar'>MultiViewCalendar</NavLink>
            <br />
            <NavLink to='/multiViewCalendarViews'>MultiViewCalendar Views</NavLink>
            <br />
            <NavLink to='/dialog'>Dialog</NavLink>
            <br />
            <NavLink to='/window'>Window</NavLink>
            <br />
            <NavLink to='/autoComplete'>AutoComplete</NavLink>
            <br />
            <NavLink to='/comboBox'>ComboBox</NavLink>
            <br />
            <NavLink to='/dropDownList'>DropDownList</NavLink>
            <br />
            <NavLink to='/multiSelect'>MultiSelect</NavLink>
            <br />
            <NavLink to='/editor'>Editor</NavLink>
            <br />
            <NavLink to='/excel'>Excel Export</NavLink>
            <br />
            <NavLink to='/gauge'>Gauge</NavLink>
            <br />
            <NavLink to='/grid'>Grid</NavLink>
            <br />
            <NavLink to='/input'>Input</NavLink>
            <br />
            <NavLink to='/numericTextBox'>NumericTextBox</NavLink>
            <br />
            <NavLink to='/switch'>Switch</NavLink>
            <br />
            <NavLink to='/maskedTextBox'>MaskedTextBox</NavLink>
            <br />
            <NavLink to='/slider'>Slider</NavLink>
            <br />
            <NavLink to='/intl'>Intl</NavLink>
            <br />
            <NavLink to='/menu'>Menu</NavLink>
            <br />
            <NavLink to='/panelBar'>PanelBar</NavLink>
            <br />
            <NavLink to='/splitter'>Splitter</NavLink>
            <br />
            <NavLink to='/tabStrip'>TabStrip</NavLink>
            <br />
            <NavLink to='/tabStripImages'>TabStrip with Images</NavLink>
            <br />
            <NavLink to='/notification'>Notification</NavLink>
            <br />
            <NavLink to='/pdf'>PDF Export</NavLink>
            <br />
            <NavLink to='/popup'>Popup</NavLink>
            <br />
            <NavLink to='/ripple'>Ripple</NavLink>
            <br />
            <NavLink to='/sortable'>Sortable</NavLink>
            <br />
            <NavLink to='/tooltip'>Tooltip</NavLink>
            <br />
            <NavLink to='/treeView'>TreeView</NavLink>
            <br />
            <NavLink to='/treeViewCheckboxes'>TreeView with Checkboxes</NavLink>
            <br />
            <NavLink to='/upload'>Upload</NavLink>
            </div>
        );
    }
}

export default Home;
