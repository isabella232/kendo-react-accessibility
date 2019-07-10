export default () => ({
    selected: '.0',
    clicks: 0,
    items: [
        {
            id: 1, title: 'My Teammates', children: [
                {
                    id: 2, title: 'Andrew Fuller', content: 'Team Lead'
                },
                {
                    id: 3, title: 'Nancy Leveling', content: 'Sales Associate'
                },
                {
                    id: 4, title: 'Robert King', content: 'Sales Associate'
                }
            ]
        },
        {
            id: 5, title: 'Project', selected: true, expanded: true, children: [
                {
                    id: 6, title: 'New Business Plan'
                },
                {
                    id: 7, title: 'Sales Forecast', children: [
                        {
                            id: 8, title: 'Q1 Forecast'
                        },
                        {
                            id: 9, title: 'Q2 Forecast'
                        },
                        {
                            id: 10, title: 'Q3 Forecast'
                        },
                        {
                            id: 11, title: 'Q4 Forecast'
                        }
                    ]
                },
                {
                    id: 12, title: 'Sales Reports'
                }
            ]
        },
        {
            id: 13, title: 'Communication', disabled: true
        }
    ]
});
