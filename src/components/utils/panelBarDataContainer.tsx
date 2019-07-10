import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as ReactRedux from 'react-redux';
import * as actionCreators from './panelBarActions';
import {
    PanelBar, PanelBarUtils, PanelBarItemProps
} from '@progress/kendo-react-layout';

import './panelBarStyles.css';
export interface PanelBarContainerProps {
    items: Array<PanelBarItemProps>;
    onSelect?: (event: any) => void;
    selected?: string;
}

export class PanelBarContainer extends React.Component<PanelBarContainerProps, {}> {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object),
        onSelect: PropTypes.func
    };
    imageUrl(imageName: string): string {
        let baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';
        return baseImageUrl + imageName + '.jpg';
    }

    render() {
        const items = PanelBarUtils.mapItemsToComponents(this.props.items);

        return (
            <PanelBar onSelect={this.props.onSelect} children={items} expandMode={'single'} />
        );
    }
}

const mapStateToProps = function (state: any) {
    return { selected: state.selected, items: state.items };
};

const mapDispatchToProps = function (dispatch: any) {
    return {
        onSelect: function (data: any) { dispatch(actionCreators.onSelect(data)); }
    };
};

export const PanelBarDataContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PanelBarContainer);
