import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Slider, SliderLabel } from '@progress/kendo-react-inputs';

interface AppState {
    val: number | null;
    width: number;
}

class SliderDemo extends React.PureComponent<{}, AppState> {
    state = {
        val: 77,
        width: 350
    };

    change = (e) => {
        this.setState({
            val: e.value
        });
        /* */
    }

    changeWidth = (e) => {
        this.setState({
            width: e.value
        });
        /* */
    }

    // calc(calc(50%) + 38px - calc(0.5 * 78px))

    render() {
        return (
            <div>
                uncontrolled: <br />
                <Slider buttons={true} step={1} style={{ width: '500px' }} min={1} max={3} defaultValue={2} />
                <br />
                <Slider style={{ width: '100%' }} min={7} max={27} defaultValue={20} />
                <br />
                <Slider min={0} max={10} defaultValue={5} />
                <br />
                <Slider min={-55} max={27} defaultValue={-55} />
                <br />
                <br />
                change width of the last slider:
                <Slider min={200} max={800} defaultValue={this.state.width} onChange={this.changeWidth} />
                <br />
                <br />
                controlled:
                <Slider min={0} max={100} value={this.state.val} onChange={this.change} step={1} /> , {this.state.val}

                <br />
                <br />
                <Slider
                    style={{ width: this.state.width + 'px' }}
                    min={0}
                    max={100}
                    value={this.state.val}
                    onChange={this.change}
                >
                    {[0, 33, 50, 66, 77, 100].map((perc: number, i) => (
                        <SliderLabel
                            key={i}
                            position={perc}
                            onClick={() => { this.setState({ val: perc }); }}
                        >
                            {perc.toString()}
                        </SliderLabel>
                    ))}
                </Slider>
                <br /><br /><br />
                <Slider
                    style={{ width: this.state.width + 'px' }}
                    min={0}
                    max={100}
                    step={10}
                    value={this.state.val}
                    onChange={this.change}
                    buttons={true}
                >
                    {[0, 33, 50, 66, 77, 100].map((perc: number, i) => (
                        <SliderLabel
                            key={i}
                            position={perc}
                            onClick={() => { this.setState({ val: perc }); }}
                        >
                            {perc.toString()}
                        </SliderLabel>
                    ))}
                </Slider>
                <br />
                <br />
                <br />
                <Slider min={0} max={100} vertical={true} step={1} buttons={true}>
                    {[0, 33, 50, 66, 77, 100].map((perc: number, i) => (
                        <SliderLabel
                            key={i}
                            position={perc}
                            onClick={() => { this.setState({ val: perc }); }}
                        >
                            {perc.toString()}
                        </SliderLabel>
                    ))}
                </Slider>
            </div >
        );
    }
}

export default SliderDemo;
