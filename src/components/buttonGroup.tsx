import * as React from 'react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import '@progress/kendo-theme-default/dist/all.css';

interface StatelessButtonGroupState {
    selectedValue: string;
}

type TogglableButton = {
    text: string,
    value: string,
    togglable: boolean
};

class ButtonGroupWithExternalStateContainer extends React.Component<{}, StatelessButtonGroupState> {
    private alignButtons: Array<string> = ['alightLeft', 'alignCenter', 'alignRight'];
    private mixedButtons: Array<TogglableButton> = [{
        text: 'First',
        value: 'first',
        togglable: true
    }, {
        text: 'Second',
        value: 'second',
        togglable: true
    }, {
        text: 'Third',
        value: 'third',
        togglable: true
    }, {
        text: 'Forth',
        value: '',
        togglable: false
    }];

    constructor(props: any) {
        super(props);

        this.state = {
            selectedValue: this.alignButtons[0]
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(event): void {
        if (event.target.value) {
            this.setState({
                selectedValue: event.target.value
            });
        }
    }

    renderButton(button: string, idx: number): JSX.Element {
        return (
            <Button
                selected={this.state.selectedValue === button}
                togglable={true}
                value={button}
                onClick={this.onClick}
                key={idx}
            >
                {button}
            </Button>
        );
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Button Group with external state</legend>
                    <ButtonGroup width="100%">
                        {this.alignButtons.map(this.renderButton, this)}
                    </ButtonGroup>
                </fieldset>
                <fieldset>
                    <legend>Button Group with external state and non-togglable buttons</legend>
                    <ButtonGroup width="100%">
                        {this.mixedButtons.map(
                            (button: TogglableButton, idx: number) => (
                                <Button
                                    selected={this.state.selectedValue === button.value}
                                    togglable={button.togglable}
                                    value={button.value}
                                    onClick={this.onClick}
                                    key={idx}
                                >
                                    {button.text}
                                </Button>
                            ),
                            this
                        )}
                    </ButtonGroup>
                </fieldset>
            </div>
        );
    }
}

const ButtonGroupContainer = () => {
    const textButtons = ['bold', 'italic', 'underline'];
    /* tslint:disable:no-console */
    const onClick = (event): void => {
        console.log(event.target.value);
    };
    /* tslint:enable:no-console */

    return (
        <fieldset id="stateless-button-group">
            <legend>Stateless Button Group</legend>
            <ButtonGroup width="100%">
                {
                    textButtons.map((buttonText, idx) => (
                        <Button
                            togglable={true}
                            value={buttonText}
                            onClick={onClick}
                            key={idx}
                        >
                            {buttonText}
                        </Button>
                    ))
                }
            </ButtonGroup>
        </fieldset>
    );
};

const ButtonGroupDemo = () => {
    return (
        <div>
            <ButtonGroupWithExternalStateContainer />
            <ButtonGroupContainer />
        </div>
    );
};

export default ButtonGroupDemo;
