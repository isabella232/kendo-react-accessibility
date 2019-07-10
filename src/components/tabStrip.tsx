import * as React from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import '@progress/kendo-theme-default/dist/all.css';
import './tabStrip.css'

interface AppState {
    selected: number;
}
interface ContentProps {
    className: string;
    degrees: number;
    msg: string;
}

class Content extends React.Component<ContentProps, any> {
    constructor(props: ContentProps) {
        super(props);
        console.log('mount');

        this.state = {
            show: true
        };
    }
    handleClick = () => {
        this.setState({ show: false });
    }
    render() {
        return (
            <span>
                <span className={this.props.className}>&nbsp;</span>
                <div className="weather">
                    <h2>{this.props.degrees}<span>&ordm;C</span></h2>
                    <p>{this.props.msg}</p>
                </div>
                {!this.state.show && <div style={{ width: 200, height: 200 }} />}
                <button onClick={this.handleClick}>Click</button>
            </span>
        );
    }
}
class TabStripDemo extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.onSelect = this.onSelect.bind(this);
        this.state = { selected: 0 } as AppState;
    }

    onSelect(e: any) {
        this.setState({
            selected: e.selected
        });
    }

    render() {
        return (
            <TabStrip
                onSelect={this.onSelect}
                selected={this.state.selected}
                style={{ width: 400 }}
            >
                <TabStripTab title="Paris">
                    <Content
                        className="rainy"
                        degrees={14}
                        msg="Rainy weather in Paris."
                    />
                </TabStripTab>

                <TabStripTab disabled={false} title="Sofia">
                    <Content
                        className="sunny"
                        degrees={22}
                        msg="Sunny weather in Sofia."
                    />
                </TabStripTab>

                <TabStripTab disabled={true} title="Kaspichan">
                    <Content
                        className="rainy"
                        degrees={17}
                        msg="Rainy weather in Kaspichan."
                    />
                </TabStripTab>

                <TabStripTab title="London">
                    <Content
                        className="cloudy"
                        degrees={17}
                        msg="Cloudy weather in London."
                    />
                </TabStripTab>
            </TabStrip>
        );
    }
}

export default TabStripDemo;
