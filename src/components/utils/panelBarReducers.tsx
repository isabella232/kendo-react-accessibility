import constants from './panelBarConstants';
import initialState from './panelBarInitialState';

export const selected = (state: any, action: any) => {
    switch (action.type) {
        case constants.SELECT:
            return action.target.props.uniquePrivateKey;
        default:
            return state || initialState().selected;
    }
};

export const items = (state: any, action: any) => {
    switch (action.type) {
        case constants.SELECT:
            return state.map(item => {
                if (item.id === action.target.props.uniquePrivateKey) {
                    return Object.assign({}, { ...item }, { selected: action.target.props.selected });
                }

                return Object.assign({}, { ...item }, { selected: false });
            });
        default:
            return state || initialState().items;
    }
};

export const clicker = (state: any, action: any) => {
    const prevState = state || initialState().clicks;

    switch (action.type) {
        case constants.TEMPLATE_CLICK:
            return prevState + 1;
        default:
            return prevState;
    }
};
