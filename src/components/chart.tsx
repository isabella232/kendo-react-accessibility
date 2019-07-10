import * as React from 'react';
import {
    Sparkline,
    StockChart,
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeriesItemTooltip,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem,
    ChartNavigatorCategoryAxis,
    ChartNavigatorPane
} from '@progress/kendo-react-charts';
import '@progress/kendo-theme-default/dist/all.css';
import { IntlService } from '@progress/kendo-react-intl';
import { filterBy } from '@progress/kendo-data-query';
import 'hammerjs';

const data = require('./utils/chartData.json');
const intl = new IntlService('en');
const stockData = data.map((item) => (Object.assign({}, item, { Date: intl.parseDate(item.Date) })));

class SeriesContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            series: [20, 40, 45, 30, 50]
        };
    }

    render() {
        const background = '#5575a8';
        return (
            <ChartSeries>
                <ChartSeriesItem color={background} data={this.state.series} >
                    <ChartSeriesItemTooltip color={this.state.tooltipColor} />
                </ChartSeriesItem>
            </ChartSeries>
        );
    }

    componentDidMount() {
        window.setInterval(
            () => {
                this.setState({
                    series: [
                        (Math.random() * 10),
                        (Math.random() * 10),
                        (Math.random() * 10),
                        (Math.random() * 10),
                        (Math.random() * 10)
                    ],
                    tooltipColor: (Math.random() * 10).toString()
                });
            },
            15000
        );
    }
}

class ChartDemo extends React.Component<any, any> {
    state = {
        stockNavigatorData: stockData,
        stockChartData: stockData,
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        renderAs: 'svg' as any,
        sparklineData: [
            936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007
        ],
        bulletData: [21, 23],
        from: new Date('2009/02/05'),
        to: new Date('2011/10/07'),
        bulletValueAxis: {
            min: 0,
            max: 30,
            plotBands: [{
                from: 0, to: 15, color: '#787878', opacity: 0.15
            }, {
                from: 15, to: 22, color: '#787878', opacity: 0.3
            }, {
                from: 22, to: 30, color: '#787878', opacity: 0.15
            }]
        },
        partialStockRender: false
    };

    render() {
        const {
            categories,
            renderAs,
            sparklineData,
            bulletData,
            bulletValueAxis,
            stockNavigatorData,
            stockChartData,
            partialStockRender,
            from,
            to
        } = this.state;

        return (
            <div>
                <label>Render as
                    <select
                        style={{ width: 250 }}
                        value={renderAs}
                        onChange={this.onChange}
                    >
                        <option value="svg">SVG</option>
                        <option value="canvas">Canvas</option>
                    </select>
                </label>
                <Chart renderAs={renderAs}>
                    <ChartTooltip visible={true} />
                    <ChartTitle text="Number of tickets" position="top" align="center" />
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories} startAngle={45} />
                    </ChartCategoryAxis>
                    <SeriesContainer />
                </Chart>
                <StockChart
                    onNavigatorFilter={this.onNavigatorChange}
                    renderAs={renderAs}
                    partialRedraw={partialStockRender}
                >
                    <ChartTitle text="The Boeing Company NYSE:BA" />
                    <ChartSeries>
                        <ChartSeriesItem
                            data={stockChartData}
                            type="candlestick"
                            openField="Open"
                            closeField="Close"
                            lowField="Low"
                            highField="High"
                            categoryField="Date"
                        />
                    </ChartSeries>
                    <ChartNavigator>
                        <ChartNavigatorSelect from={from} to={to} />
                        <ChartNavigatorSeries>
                            <ChartNavigatorSeriesItem
                                data={stockNavigatorData}
                                type="area"
                                field="Close"
                                categoryField="Date"
                            />
                        </ChartNavigatorSeries>
                        <ChartNavigatorCategoryAxis />
                        <ChartNavigatorPane />
                    </ChartNavigator>
                </StockChart>

                <button onClick={this.updateNavigatorRange}>Limit navigator range</button>
                <ul>
                    <li>
                        Base Sparkline chart
                        <Sparkline data={sparklineData} />
                    </li>
                    <li>
                        Bar/Column type Sparkline chart
                        <Sparkline data={sparklineData} type="column" />
                    </li>
                    <li>
                        Area type Sparkline chart
                        <Sparkline data={sparklineData} type="area" />
                    </li>
                    <li>
                        Pie type Sparkline chart
                        <Sparkline data={sparklineData} type="pie" />
                    </li>
                    <li>
                        Bullet type Sparkline chart
                        <Sparkline data={bulletData} type="bullet">
                            <ChartValueAxis>
                                <ChartValueAxisItem {...bulletValueAxis} />
                            </ChartValueAxis>
                        </Sparkline>
                    </li>
                </ul>
            </div >
        );
    }

    private onChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
        this.setState({ renderAs: (event.target as any).value });
    }

    private updateNavigatorRange = () => {
        const from =  new Date('2010/04/05');
        const to = new Date('2010/09/01');

        const filters = {
            logic: 'and' as any,
            filters: [{
                field: 'Date',
                operator: 'gte',
                value: from
            }, {
                field: 'Date',
                operator: 'lt',
                value: to
            }]
        };

        this.setState((prevState: any, _: any) => ({
            from,
            to,
            stockChartData: filterBy(prevState.stockNavigatorData, filters),
            partialStockRender: false
        }));
    }

    private onNavigatorChange = (event: any) => {
        const filters = {
            logic: 'and' as any,
            filters: [{
                field: 'Date',
                operator: 'gte',
                value: event.from
            }, {
                field: 'Date',
                operator: 'lt',
                value: event.to
            }]
        };

        this.setState((prevState: any, _: any) => ({
            stockChartData: filterBy(prevState.stockNavigatorData, filters),
            partialStockRender: true
        }));
    }
}

export default ChartDemo;
