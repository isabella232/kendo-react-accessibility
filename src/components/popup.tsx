import * as React from 'react';
import { Popup } from '@progress/kendo-react-popup';
import '@progress/kendo-theme-default/dist/all.css';

interface AppState {
    show?: boolean;
    showInner?: boolean;
}
class PopupDemo extends React.Component<{}, AppState> {
    private anchor: HTMLElement;
    private anchorInner: HTMLElement;

    constructor(props: any) {
        super(props);

        this.state = {
            show: false,
            showInner: false
        };

        this.togglePopup = this.togglePopup.bind(this);
        this.toggleInnerPopup = this.toggleInnerPopup.bind(this);
    }

    togglePopup() {
        this.setState({
            show: !this.state.show,
            showInner: this.state.show ? false : this.state.showInner
        });
    }

    toggleInnerPopup() {
        this.setState({
            showInner: !this.state.showInner
        });
    }

    render() {
        const show = this.state.show;
        const popupProps = {
            anchor: this.anchor,
            show: show
        };

        return (
            <div className="example">
                <div className="content">
                    <button
                        className="anchor"
                        style={{ position: 'absolute', left: '500px', top: '100px' }}
                        onClick={this.togglePopup}
                        ref={(button: HTMLButtonElement) => { this.anchor = button; }}
                    >
                        {this.state.show ? 'hide' : 'show'}
                    </button>
                    <Popup {...popupProps}>
                        <div>
                            <p>Some test content</p>
                            <p>Some test content</p>
                            <p>Some test content</p>
                            <p>Some test content</p>
                            <div className="form-group">
                                <button
                                    onClick={this.toggleInnerPopup}
                                    ref={(button: HTMLButtonElement) => { this.anchorInner = button; }}
                                    style={{ width: '130px' }}
                                >
                                    {this.state.showInner ? 'hide inner popup' : 'show inner popup'}
                                </button>
                            </div>
                        </div>
                    </Popup>
                    <Popup show={this.state.showInner} anchor={this.anchorInner}>
                        <div style={{ width: '130px' }} className="inner-popup-content">
                            <p>inner test content</p>
                            <p>inner test content</p>
                            <p>inner test content</p>
                            <p>inner test content</p>
                        </div>
                    </Popup>
                </div>
            </div>
        );
    }
}

export default PopupDemo;
