import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { DropDownButton, SplitButton } from '@progress/kendo-react-buttons';
import { dropdownBtnChildren, models } from './utils/listButtonItems';

class DdbtnChildrenNoAnim extends React.Component<{}, any> {
    state = { events: [] };

    render() {
        return (
            <div>
                <DropDownButton
                    text="DefaultBtn"
                    popupSettings={{ animate: false }}
                    icon="paste"
                    primary={true}
                    onFocus={() => this.onEvent('Focus')}
                    onBlur={() => this.onEvent('Blur')}
                    onOpen={() => this.onEvent('Open')}
                    onClose={() => this.onEvent('Close')}
                    onItemClick={() => this.onEvent('ItemClick')}
                >
                    {dropdownBtnChildren}
                </DropDownButton>
                Events:
                <span id="events">
                    {this.state.events.join(',')}
                </span>
            </div>
        );
    }

    onEvent = (event: string) => {
        this.setState((state) => {
            state.events.push(event);

            return state;
        });
    }
}

class DdbtnChildrenNoRtl extends React.Component<{}, any> {
    state = { events: [] };

    render() {
        return (
            <div dir="rtl">
                <DropDownButton
                    text="DefaultBtn"
                    icon="paste"
                    onFocus={() => this.onEvent('Focus')}
                    onBlur={() => this.onEvent('Blur')}
                    onOpen={() => this.onEvent('Open')}
                    onClose={() => this.onEvent('Close')}
                    onItemClick={() => this.onEvent('ItemClick')}
                >
                    {dropdownBtnChildren}
                </DropDownButton>
                Events:
                <span id="events">
                    {this.state.events.join(',')}
                </span>
            </div>
        );
    }

    onEvent = (event: string) => {
        this.setState((state) => {
            state.events.push(event);

            return state;
        });
    }
}

class SplitbtnModelsNoAnim extends React.Component<{}, any> {
    state = { events: [] };

    render() {
        return (
            <div>
                <SplitButton
                    text="DefaultBtn"
                    items={models}
                    popupSettings={{ animate: false }}
                    icon="paste"
                    onFocus={() => this.onEvent('Focus')}
                    onBlur={() => this.onEvent('Blur')}
                    onOpen={() => this.onEvent('Open')}
                    onClose={() => this.onEvent('Close')}
                    onButtonClick={() => this.onEvent('ButtonClick')}
                    onItemClick={() => this.onEvent('ItemClick')}
                />
                Events:
                <span id="events">
                    {this.state.events.join(',')}
                </span>
            </div>
        );
    }

    onEvent = (event: string) => {
        this.setState((state) => {
            state.events.push(event);

            return state;
        });
    }
}

class SplitbtnModelsNoRtl extends React.Component<{}, any> {
    state = { events: [] };

    render() {
        return (
            <div dir="rtl">
                <SplitButton
                    text="DefaultBtn"
                    items={models}
                    icon="paste"
                    look="outline"
                    onFocus={() => this.onEvent('Focus')}
                    onBlur={() => this.onEvent('Blur')}
                    onOpen={() => this.onEvent('Open')}
                    onClose={() => this.onEvent('Close')}
                    onButtonClick={() => this.onEvent('ButtonClick')}
                    onItemClick={() => this.onEvent('ItemClick')}
                />
                Events:
                <span id="events">
                    {this.state.events.join(',')}
                </span>
            </div>
        );
    }

    onEvent = (event: string) => {
        this.setState((state) => {
            state.events.push(event);

            return state;
        });
    }
}

const ListButtonDemo = () => {
    return (
        <div>
            <DdbtnChildrenNoAnim />
            <DdbtnChildrenNoRtl />
            <SplitbtnModelsNoAnim />
            <SplitbtnModelsNoRtl />
        </div>
    );
};

export default ListButtonDemo;
