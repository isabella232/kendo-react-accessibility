import * as React from 'react';
import {
    ArcGauge,
    ArcGaugeProps,
    LinearGauge,
    LinearGaugeProps,
    RadialGauge,
    RadialGaugeProps
} from '@progress/kendo-react-gauges';
import '@progress/kendo-theme-default/dist/all.css';

const DemoContainer = (props: { heading: string, children: React.ReactNode }) =>
    (<div><h1>{props.heading}</h1>{props.children}</div>);

class ArcGaugeComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: 3,
            toggle: true
        };
    }

    componentDidMount() {
        setInterval(
            () => {
                this.setState({
                    value: Math.ceil(Math.random() * 100),
                    toggle: !this.state.toggle
                });
            },
            2000);
    }
    render() {
        const gaugeStyles = {
            display: 'block'
        };

        const arcOptions = {
            value: this.state.value,
            colors: [{from: 0, to: 25, color: 'red'}, {from: 25, to: 100, color: 'green'}],
            style: gaugeStyles
        } as ArcGaugeProps;

        const linearOptions = {
            pointer: {
                value: this.state.value
            },
            style: gaugeStyles
        } as LinearGaugeProps;

        const radialGauge = {
            pointer: [{
                value: this.state.value,
                color: 'red'
            }, {
                value: this.state.value >= 50 ? this.state.value / 2 : this.state.value * 2,
                color: 'green'
            }],
            style: gaugeStyles,
            renderAs: 'canvas'
        } as RadialGaugeProps;

        const arcCenterRenderer = (value, color) => {
            return (<span><h3 style={{color: color}}>{value}%</h3> of which renewables</span>);
        };

        return (
            <DemoContainer heading="ArcGauge demos">
                <div id="arc">
                    <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />
                </div>
                <div id="linear">
                    <LinearGauge {...linearOptions} /></div>
                <div id="radial">
                    <RadialGauge {...radialGauge} />
                </div>
            </DemoContainer>
        );
    }
}

class GaugeDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <ArcGaugeComponent />
            </div>
        );
    }
}

export default GaugeDemo;
