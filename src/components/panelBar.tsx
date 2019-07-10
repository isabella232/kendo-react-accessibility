import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { PanelBarDataContainer } from './utils/panelBarDataContainer';
import * as reducers from './utils/panelBarReducers';

import '@progress/kendo-theme-default/dist/all.css';

const rootReducer = Redux.combineReducers({
    selected: reducers.selected,
    items: reducers.items
});

let store = Redux.createStore(rootReducer);

const PanelBarDemo = () => {
    return (
        <div>
            <ReactRedux.Provider store={store}>
                <PanelBarDataContainer />
            </ReactRedux.Provider>,
        </div>
    );
};

export default PanelBarDemo;
