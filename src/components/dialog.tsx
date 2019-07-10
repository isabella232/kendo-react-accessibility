import * as React from 'react';
import { Dialog, DialogActionsBar, DialogCloseEvent } from '@progress/kendo-react-dialogs';
import '@progress/kendo-theme-default/dist/all.css';

interface AppState {
    showDialog: boolean;
}

class CustomTitleBar extends React.Component<{}> {
    render() {
        return (
            <div className="custom-title" style={{ fontSize: '18px', lineHeight: '1.3em' }}>
                <span className="k-icon k-i-print" />Print this page
            </div>
        );
    }
}

class DialogDemo extends React.Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            showDialog: true
        };
    }

    firstAction = () => {
        // tslint:disable-next-line
        console.log("firstAction");
    }

    otherAction = () => {
        // tslint:disable-next-line
        console.log("otherAction");
    }

    onCloseHandler = (event: DialogCloseEvent) => {
        // tslint:disable-next-line
        console.log(event);
        this.setState({
            showDialog: false
        });
    }

    handleButtonClick = () => {
        this.setState({
            showDialog: true
        });
    }

    renderCustomTitle = () => {
        return (
            <div style={{ fontSize: '18px', lineHeight: '1.3em' }}>
                <span className="k-icon k-i-print" />Print this page
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.showDialog && <Dialog
                    title={<CustomTitleBar />}
                    onClose={this.onCloseHandler}
                >
                    <p>Some content passed for the Dialog!</p>
                    <input className="input-in-content" />
                    <DialogActionsBar>
                        <button autoFocus={true} className="k-button" onClick={this.firstAction} >Some action</button>
                        <button className="k-button" onClick={this.otherAction}>Some other action</button>
                    </DialogActionsBar>
                </Dialog>}
                {!this.state.showDialog && <button className="k-button" onClick={this.handleButtonClick}>Open</button>}
            </div>
        );
    }
}

export default DialogDemo;
