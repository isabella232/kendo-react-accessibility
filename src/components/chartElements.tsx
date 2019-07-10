import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesDefaults,
    ChartArea,
    ChartPanes,
    ChartPane,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';
import '@progress/kendo-theme-default/dist/all.css';

const DemoContainer = (props: { heading: string, children: React.ReactNode }) =>
    (<div><h1>{props.heading}</h1>{props.children}</div>);

class ChartAreaComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            series: [1, 2, 3, 5]
        };
    }

    render(): any {
        const { series } = this.state;

        return (
            <DemoContainer heading="Chart Area demos">
                <Chart>
                    <ChartArea background="#eee" margin={30} />
                    <ChartSeries>
                        <ChartSeriesItem data={series} name="Fibonacci" />
                    </ChartSeries>
                </Chart>
            </DemoContainer>
        );
    }
}

class ChartAxesComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            series: [20, 40, 45, 30, 50],
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        };
    }

    render(): any {
        const { series, categories } = this.state;

        return (
            <DemoContainer heading="Chart Axes demos">
                <Chart>
                    <ChartValueAxis>
                        <ChartValueAxisItem title={{ text: 'Miles' }} min={0} max={100} />
                    </ChartValueAxis>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories} />
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem data={series} type="line" />
                    </ChartSeries>
                </Chart>
            </DemoContainer>
        );
    }
}

class ChartErrorBarsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            series: [
                { value: 4.743, low: 4.5, high: 5 },
                { value: 7.295, low: 7, high: 8 },
                { value: 6.376, low: 5, high: 6.5 }
            ]
        };
    }

    render(): any {
        const { series } = this.state;

        return (
            <DemoContainer heading="Chart Error bars demos">
                <Chart>
                    <ChartSeries>
                        <ChartSeriesItem
                            data={series}
                            type="line"
                            field="value"
                            errorLowField="low"
                            errorHighField="high"
                        />
                    </ChartSeries>
                </Chart>
            </DemoContainer>
        );
    }
}

class ChartPanesComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            series: [[1, 2, 3, 5], [1, 2, 1, 2]]
        };
    }

    render(): any {
        const { series } = this.state;

        return (
            <DemoContainer heading="Chart Panes demos">
                <Chart>
                    <ChartPanes>
                        <ChartPane name="top" />
                        <ChartPane name="bottom" height={100} />
                    </ChartPanes>
                    <ChartValueAxis>
                        <ChartValueAxisItem name="top" />
                        <ChartValueAxisItem name="bottom" pane="bottom" />
                    </ChartValueAxis>
                    <ChartSeries>
                        <ChartSeriesItem data={series[0]} />
                        <ChartSeriesItem data={series[1]} type="line" axis="bottom" />
                    </ChartSeries>
                </Chart>
            </DemoContainer>
        );
    }

    componentDidMount() {
        window.setInterval(
            () => {
                this.setState((prevState: any) => {
                    const [firstSeries, secondSeries] = prevState.series;
                    return { series: [secondSeries, firstSeries] };
                });
            },
            2000
        );
    }
}

class ChartPlotBandsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            series: [1, 2, 3],
            categories: ['A', 'B', 'C'],
            categoryPlotBands: [{
                from: 1,
                to: 2,
                color: '#ffd246',
                opacity: 0.8
            }],
            valuePlotBands: [{
                from: 2,
                to: 3,
                color: '#78d237',
                opacity: 0.8
            }]
        };
    }

    render() {
        const { series, categories, categoryPlotBands, valuePlotBands } = this.state;

        return (
            <DemoContainer heading="Chart Panes demos">
                <Chart>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories} plotBands={categoryPlotBands} />
                    </ChartCategoryAxis>
                    <ChartValueAxis>
                        <ChartValueAxisItem plotBands={valuePlotBands} />
                    </ChartValueAxis>
                    <ChartSeries>
                        <ChartSeriesItem data={series} />
                    </ChartSeries>
                </Chart>
            </DemoContainer>
        );
    }
}

class ChartSeriesComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            firstSeries: [[10, 10], [15, 20], [20, 25], [32, 40], [43, 50], [55, 60], [60, 70], [70, 80], [90, 100]],
            secondSeries: [[10, 40], [17, 50], [18, 70], [35, 90], [47, 95], [60, 100]],
            salesData: [20, 40, 45, 30, 50],
            purchaseData: [12, 30, 30, 45, 10],
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        };
    }

    render() {
        const { firstSeries, secondSeries, salesData, purchaseData, categories } = this.state;

        return (
            <DemoContainer heading="Chart Series demos">
                <h2>ScatterLine series type</h2>
                <Chart>
                    <ChartSeries>
                        <ChartSeriesItem data={firstSeries} type="scatterLine" />
                        <ChartSeriesItem data={secondSeries} type="scatterLine" />
                    </ChartSeries>
                </Chart>
                <h2>Bar series type</h2>
                <Chart>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories} />
                    </ChartCategoryAxis>
                    <ChartSeriesDefaults type="bar" labels={{ visible: true, format: 'c' }} />
                    <ChartSeries>
                        <ChartSeriesItem data={salesData} />
                        <ChartSeriesItem data={purchaseData} />
                    </ChartSeries>
                </Chart>
            </DemoContainer>
        );
    }
}

class ChartElementsDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <ChartAreaComponent />
                <ChartAxesComponent />
                <ChartErrorBarsComponent />
                <ChartPanesComponent />
                <ChartSeriesComponent />
                <ChartPlotBandsComponent />
            </div>
        );
    }
}

export default ChartElementsDemo;
