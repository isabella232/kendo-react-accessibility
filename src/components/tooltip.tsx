import * as React from 'react';
import { Tooltip } from '@progress/kendo-react-tooltip';
import '@progress/kendo-theme-default/dist/all.css';

interface AppState {
    status: string;
}

class TooltipDemo extends React.Component<{}, AppState> {
    tooltip: any;
    secondTooltip: any;

    constructor(props: any) {
        super(props);
        this.state = {
            status: 'closed'
        };
    }

    handleShowTooltip = (element) => {
        if (element.innerHTML[0] === 's') {
            return false;
        }
        return true;
    }

    handleOpen = ( ) => {
        this.setState({ status: 'opened' });
    }

    handleClose = ( ) => {
        this.setState({ status: 'closed' });
    }

    handleOpenSecond = ( ) => {
        this.setState({ status: 'openSecond' });
    }
    render() {
        return (
            <div>
                <p className="tooltip-state">{this.state.status}</p>
                <div
                    onMouseOver={event => this.tooltip && this.tooltip.handleMouseOver(event)}
                    onMouseOut={event => this.tooltip && this.tooltip.handleMouseOut(event)}
                >
                    <button className="k-button" title="test">Title</button>
                    <button className="k-button no-title">No title</button>
                    <button className="k-button" title="test second title">Second with title</button>
                    <Tooltip
                        onOpen={this.handleOpen}
                        anchorElement="target"
                        openDelay={1}
                        position="bottom"
                        onClose={this.handleClose}
                        ref={(el) => this.tooltip = el}
                    />
                </div>
                <div
                    onMouseOver={event => this.secondTooltip && this.secondTooltip.handleMouseOver(event)}
                    onMouseOut={event => this.secondTooltip && this.secondTooltip.handleMouseOut(event)}
                >
                    <button className="second" title="test">Title</button>
                    <button className="k-button no-title">No title</button>
                    <button className="k-button" title="test second title">Second with title</button>
                    <Tooltip
                        onOpen={this.handleOpenSecond}
                        showCallout={false}
                        openDelay={1}
                        ref={(el) => this.secondTooltip = el}
                    />
                </div>
                <Tooltip showCallout={false}>
                    <button className="hoc">HOC</button>
                </Tooltip>
            </div>
        );
    }
}

export default TooltipDemo;
