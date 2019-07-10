import * as React from 'react';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';
import '@progress/kendo-theme-default/dist/all.css';

class NotificationDemo extends React.Component<{}, {show: boolean}> {
    state = { show: false };

    componentDidMount() {
        this.setState({show: true});
    }

    onClose = () => {
        this.setState({show: false});
    }

    render() {
        // https://github.com/telerik/kendo-themes/blob/develop/tests/visual/notification.html
        // tslint:disable:max-line-length
        const content = <>Your data has been saved. <strong>Time for beer!</strong></>;
        const { show } = this.state;
        return (
            <React.Fragment>
                {/* top left */}
                <NotificationGroup
                    style={{
                        top: 0,
                        left: 0,
                        alignItems: 'flex-start'
                    }}
                >
                    <Notification>{content}</Notification>
                    <Fade enter={true} exit={true}>
                        {show && <Notification closable={true} onClose={this.onClose} type={{style: 'success', icon: true}}>{content}</Notification>}
                    </Fade>
                    <Notification type={{style: 'success', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'error', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'info', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'warning', icon: true}}>{content}</Notification>
                </NotificationGroup>

                {/* bottom left */}
                <NotificationGroup
                    style={{
                        left: 0,
                        bottom: 0,
                        alignItems: 'flex-start'
                    }}
                >
                    <Notification>{content}</Notification>
                    {show && <Notification closable={true} onClose={this.onClose} type={{style: 'success', icon: false}}>{content}</Notification>}
                    <Notification type={{style: 'success', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'error', icon: true}} closable={true} >{content}</Notification>
                    <Notification type={{style: 'info', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'warning', icon: true}}>{content}</Notification>
                </NotificationGroup>

                {/* top center */}
                <NotificationGroup
                    style={{
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                >
                    <Notification>{content}</Notification>
                    <Fade enter={true} exit={true}>
                        {show && <Notification closable={true} onClose={this.onClose} type={{style: 'success', icon: false}}>{content}</Notification>}
                    </Fade>
                    <Notification type={{style: 'success', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'error', icon: true}} closable={true}>{content}</Notification>
                    <Notification type={{style: 'info', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'warning', icon: true}}>{content}</Notification>
                </NotificationGroup>

                {/* bottom center */}
                <NotificationGroup
                    style={{
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                >
                    <Notification type={{style: 'success', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'error', icon: true}}>{content}</Notification>
                    {show && <Notification closable={true} onClose={this.onClose} type={{style: 'info', icon: true}}>{content}</Notification>}
                    <Notification type={{style: 'warning', icon: true}}>{content}</Notification>
                    <Fade enter={true} exit={true}>
                        {show && <Notification>{content}</Notification>}
                    </Fade>
                    <Notification type={{style: 'success', icon: false}}>{content}</Notification>
                </NotificationGroup>

                {/* top right */}
                <NotificationGroup
                    style={{
                        top: 0,
                        right: 0,
                        alignItems: 'flex-end'
                    }}
                >
                    <Notification type={{style: 'success', icon: false}}>{content}</Notification>
                    <Notification type={{style: 'success', icon: true}}>{content}</Notification>
                    <Fade enter={true} exit={true}>
                        {show && <Notification closable={true} onClose={this.onClose}>{content}</Notification>}
                    </Fade>
                    <Notification type={{style: 'error', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'info', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'warning', icon: true}}>{content}</Notification>
                </NotificationGroup>

                {/* bottom right */}
                <NotificationGroup
                    style={{
                        bottom: 0,
                        right: 0,
                        alignItems: 'flex-end'
                    }}
                >
                    <Notification>{content}</Notification>
                    {show && <Notification closable={true} onClose={this.onClose} type={{style: 'success', icon: false}}>{content}</Notification>}
                    <Notification type={{style: 'success', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'error', icon: true}} closable={true}>{content}</Notification>
                    <Notification type={{style: 'info', icon: true}}>{content}</Notification>
                    <Notification type={{style: 'warning', icon: true}}>{content}</Notification>
                </NotificationGroup>
            </React.Fragment>
        );
    }
}

export default NotificationDemo;
