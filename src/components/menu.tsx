import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Menu } from '@progress/kendo-react-layout';
import { menuChildren, items } from './utils/menuItems';
import ItemRender from './utils/menuItemRender';

class MenuDemo extends React.Component<{}, any> {
    render() {
        return (
            <div>
                <Menu
                    itemRender={ItemRender}
                    // Read from query string
                    openOnClick={new URLSearchParams(window.location.search).has('openOnClose')}
                >
                    {menuChildren}
                </Menu >
                <br />
                <Menu
                    items={items}
                    vertical={true}
                    style={{ display: 'inline-block' }}
                    itemRender={ItemRender}
                    hoverCloseDelay={200}
                    // Read from query string
                    openOnClick={new URLSearchParams(window.location.search).has('openOnClose')}
                />
            </div>
        );
    }
}

export default MenuDemo;
