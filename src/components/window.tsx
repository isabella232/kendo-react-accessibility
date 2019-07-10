import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import '@progress/kendo-theme-default/dist/all.css';

class CustomTitleBar extends React.Component<{ value: any }> {
    render() {
        return (
            <div className="custom-title" style={{ fontSize: '18px', lineHeight: '3.3em' }}>
                <span className="k-icon k-i-print" />Print this page
                <span>{this.props.value}</span>
            </div>
        );
    }
}

interface AppState {
    show: boolean;
    left: number;
    windowState: string;
    value: any;
}
class WindowDemo extends React.Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            show: true,
            left: 300,
            windowState: 'DEFAULT',
            value: 0
        };
    }

    handleToggle = () => {
        this.setState({
            show: !this.state.show
        });
    }

    handleToggleState = () => {
        this.setState({
            windowState: 'FULLSCREEN'
        });
    }

    handleStateChange = (e) => {
        this.setState({
            windowState: e.state
        });
    }
    handleMove = () => {
        this.setState({
            value: new Date().getMilliseconds()
        });
    }

    render() {
        return (
            <div>
                <button className="k-button" onClick={this.handleToggle}>Open/Show Window</button>
                <button className="k-button" onClick={this.handleToggleState}>Change state</button>
                {this.state.show && <Window
                    stage={this.state.windowState}
                    shouldUpdateOnDrag={true}
                    onClose={this.handleToggle}
                    onStageChange={this.handleStateChange}
                    onMove={this.handleMove}
                    initialHeight={301}
                    initialWidth={400}
                    initialTop={500}
                    initialLeft={600}
                    // resizable={false}
                    // draggable={false}
                    minHeight={200}
                    minWidth={300}
                // width={1000}
                // height={500}
                // top={500}
                >
                    <CustomTitleBar value={this.state.value} />
                </Window>}
            </div>
        );
    }
}

export default WindowDemo;
