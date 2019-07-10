import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { MaskedTextBox, MaskedTextBoxChangeEvent } from '@progress/kendo-react-inputs';

interface AppState {
    value: string;
    selection?: { start: number, end: number };
}

class MaskedTextBoxDemo extends React.Component<any, AppState> {
    state = {
        value: '(359) 884-12-33-21',
        selection: undefined
    };

    handleChange = (event: MaskedTextBoxChangeEvent) => {
        this.setState({
            value: event.target.value,
            selection: {
                start: event.selectionStart,
                end: event.selectionEnd
            }
        });

        // tslint:disable-next-line:no-console
        // tslint:disable-next-line:max-line-length
        window.console.log('onChange ', event.target.value, event.target.rawValue, `{ start: ${event.selectionStart}, end: ${event.selectionEnd} }`);
    }

    render() {
        return (
            <div className="row input">
                <div className="cold-md-3 controlled">
                    <h5>Controlled MaskedTextBox</h5>
                    <MaskedTextBox
                        value={this.state.value}
                        onChange={this.handleChange}
                        selection={this.state.selection}
                        mask="(999) 000-00-00-00"
                    />
                </div>
            </div>
        );
    }
}

export default MaskedTextBoxDemo;
