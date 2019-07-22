import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Error from './components/error';
import AnimationDemo from './components/animation';
import ButtonDemo from './components/button';
import ButtonGroupDemo from './components/buttonGroup';
import ListButtonDemo from './components/listButton';
import ChartDemo from './components/chart';
import ChartElementsDemo from './components/chartElements';
import ConversationalUIDemo from './components/conversationalUI';
import CalendarDemo from './components/calendar';
import DateInputDemo from './components/dateInput';
import DatePickerDemo from './components/datePicker';
import DateRangePickerDemo from './components/dateRangePicker';
import DateTimePickerDemo from './components/dateTimePicker';
import TimePickerDemo from './components/timePicker';
import MultiViewCalendarDemo from './components/multiViewCalendar';
import MultiViewCalendarViewsDemo from './components/multiViewCalendarViews';
import DialogDemo from './components/dialog';
import WindowDemo from './components/window';
import AutoCompleteDemo from './components/autoComplete';
import ComboBoxDemo from './components/comboBox';
import DropDownListDemo from './components/dropDownList';
import MultiSelectDemo from './components/multiSelect';
import EditorDemo from './components/editor';
import ExcelDemo from './components/excel';
import GaugeDemo from './components/gauge';
import GridDemo from './components/grid';
import InputDemo from './components/input';
import NumericTextBoxDemo from './components/numericTextBox';
import SwitchDemo from './components/switch';
import MaskedTextBoxDemo from './components/maskedTextBox';
import SliderDemo from './components/slider';
import IntlDemo from './components/intl';
import MenuDemo from './components/menu';
import PanelBarDemo from './components/panelBar';
import SplitterDemo from './components/splitter';
import TabStripDemo from './components/tabStrip';
import TabStripImagesDemo from './components/tabStripImages';
import NotificationDemo from './components/notification';
import PDFDemo from './components/pdf';
import PopupDemo from './components/popup';
import RippleDemo from './components/ripple';
import SortableDemo from './components/sortable';
import TooltipDemo from './components/tooltip';
import TreeViewDemo from './components/treeView';
import TreeViewCheckboxesDemo from './components/treeViewCheckboxes';
import UploadDemo from './components/upload';
import '@progress/kendo-theme-default/dist/all.css';

class App extends React.Component<{}, any> {
    render() {
        return (
            <HashRouter basename="/">
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/animation" component={AnimationDemo} />
                <Route path="/button" component={ButtonDemo} />
                <Route path="/buttonGroup" component={ButtonGroupDemo} />
                <Route path="/listButton" component={ListButtonDemo} />
                <Route path="/chart" component={ChartDemo} />
                <Route path="/chartElements" component={ChartElementsDemo} />
                <Route path="/conversationalUI" component={ConversationalUIDemo} />
                <Route path="/calendar" component={CalendarDemo} />
                <Route path="/dateInput" component={DateInputDemo} />
                <Route path="/datePicker" component={DatePickerDemo} />
                <Route path="/dateRangePicker" component={DateRangePickerDemo} />
                <Route path="/dateTimePicker" component={DateTimePickerDemo} />
                <Route path="/timePicker" component={TimePickerDemo} />
                <Route path="/multiViewCalendar" component={MultiViewCalendarDemo} />
                <Route path="/multiViewCalendarViews" component={MultiViewCalendarViewsDemo} />
                <Route path="/dialog" component={DialogDemo} />
                <Route path="/window" component={WindowDemo} />
                <Route path="/autoComplete" component={AutoCompleteDemo} />
                <Route path="/comboBox" component={ComboBoxDemo} />
                <Route path="/dropDownList" component={DropDownListDemo} />
                <Route path="/multiSelect" component={MultiSelectDemo} />
                <Route path="/editor" component={EditorDemo} />
                <Route path="/excel" component={ExcelDemo} />
                <Route path="/gauge" component={GaugeDemo} />
                <Route path="/grid" component={GridDemo} />
                <Route path="/input" component={InputDemo} />
                <Route path="/numericTextBox" component={NumericTextBoxDemo} />
                <Route path="/switch" component={SwitchDemo} />
                <Route path="/maskedTextBox" component={MaskedTextBoxDemo} />
                <Route path="/slider" component={SliderDemo} />
                <Route path="/intl" component={IntlDemo} />
                <Route path="/menu" component={MenuDemo} />
                <Route path="/panelBar" component={PanelBarDemo} />
                <Route path="/splitter" component={SplitterDemo} />
                <Route path="/tabStrip" component={TabStripDemo} />
                <Route path="/tabStripImages" component={TabStripImagesDemo} />
                <Route path="/notification" component={NotificationDemo} />
                <Route path="/pdf" component={PDFDemo} />
                <Route path="/popup" component={PopupDemo} />
                <Route path="/ripple" component={RippleDemo} />
                <Route path="/sortable" component={SortableDemo} />
                <Route path="/tooltip" component={TooltipDemo} />
                <Route path="/treeView" component={TreeViewDemo} />
                <Route path="/treeViewCheckboxes" component={TreeViewCheckboxesDemo} />
                <Route path="/upload" component={UploadDemo} />
                <Route component={Error} />
            </Switch>
            </HashRouter>
        );
    }
}

export default App;
