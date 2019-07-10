import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import '@progress/kendo-theme-default/dist/all.css';

export interface ButtonContainerProps {
    children?: any;
}
export interface ButtonContainerState {
    disabled?: boolean;
}

class ButtonContainer extends React.Component<ButtonContainerProps, ButtonContainerState> {
    constructor(props: any) {
        super(props);
        this.state = { disabled: false };
        this.onClick = this.onClick.bind(this);
    }

    onClick(_: React.MouseEvent<HTMLButtonElement>): void {
        this.setState({ disabled: !this.state.disabled });
    }

    render() {
        return (
            <div>
                <Button onClick={this.onClick}>Disable next button</Button>
                {' '}
                <Button disabled={this.state.disabled}>Button</Button>
            </div>
        );
    }
}

/* tslint:disable:no-console */
function handleDomEvent(this, event) {
    console.log(`Context: ${this}`);
    console.log(`Event type: ${event.type}`);
}
/* tslint:enable:no-console */

class ButtonDemo extends React.Component<{}, any> {
    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flexBasis: '50%' }}>
                <p>Button</p>
                <Button id="default">Button</Button>
    
                <p>Button with style</p>
                <Button style={{ height: '42px', border: '1px solid pink' }}> Styled Button </Button>
    
                <p>Disabled Button</p>
                <Button disabled={true}>Button</Button>
    
                <p>Bare Button</p>
                <Button look="bare">Button</Button>
    
                <p>Flat Button</p>
                <Button look="flat">Button</Button>
    
                <p>Outline Button</p>
                <Button look="outline">Button</Button>
    
                <p>Primary Button</p>
                <Button primary={true}>Primary Button</Button>
    
                <p>Primary Disabled Button</p>
                <Button primary={true} disabled={true} icon="folder">Primary Button</Button>
    
                <p>Primary Bare Button</p>
                <Button primary={true} look="bare">Button</Button>
    
                <p>Togglable Flat Button</p>
                <Button togglable={true} look="flat">Button</Button>
    
                <p>Togglable Outline Button</p>
                <Button togglable={true} look="outline">Button</Button>
            </div>
            <div style={{ flexBasis: '50%' }}>
                <p>Button with icon</p>
                <Button icon="refresh">Refresh</Button>
    
                <p>Button with icon (image via imageUrl) dir = 'rtl'</p>
                <Button
                    dir="rtl"
                    imageUrl="http://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png"
                    imageAlt="Snowboarding Icon"
                >Snowboarding
                </Button>
    
                <p>Button with icon (custom icon font - FontAwesome) icon</p>
                <Button iconClass="fa fa-key fa-fw">FontAwesome icon</Button>
    
                <p>Toggleable Button</p>
                <Button id="togglable" togglable={true}>Togglable button</Button>
    
                <p>Toggleable Disabled Button</p>
                <Button id="disabledTogglable" togglable={true} disabled={true} >Togglable button</Button>
    
                <p>onClick event handler</p>
                <ButtonContainer />
    
                <p>Disabled Toggle button with event handlers</p>
                <Button
                    togglable={true}
                    disabled={true}
                    onClick={handleDomEvent}
                    onMouseDown={handleDomEvent}
                    onMouseUp={handleDomEvent}
                    onFocus={handleDomEvent}
                    onBlur={handleDomEvent}
                    onKeyPress={handleDomEvent}
                >
                    Toggle Button
                </Button>
    
                <p>Toggle button with event handlers</p>
                <Button
                    togglable={true}
                    onClick={handleDomEvent}
                    onMouseDown={handleDomEvent}
                    onMouseUp={handleDomEvent}
                    onFocus={handleDomEvent}
                    onBlur={handleDomEvent}
                    onKeyPress={handleDomEvent}
                >
                    Toggle Button
                </Button>
    
                <hr />
                <p>Plain button</p>
                <button
                    onClick={handleDomEvent}
                    onFocus={handleDomEvent}
                    onKeyPress={handleDomEvent}
                >
                    Plain button
                </button>
            </div>
        </div>
        );
    }
}

export default ButtonDemo
