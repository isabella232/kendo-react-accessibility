import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Chat, Message } from '@progress/kendo-react-conversational-ui';
import { conversation, user } from './utils/conversationData';

interface AppState {
    messages: Message[];
}

interface AttachmentTemplateProps { item: any; }
class AttachmentTemplate extends React.Component<AttachmentTemplateProps, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const attachment = this.props.item as any;
        if (attachment.contentType === 'hotel') {
            return (
            <a href={attachment.site} target="_blank" draggable={false} tabIndex={-1}>
            <img src={attachment.thumb} draggable={false} />
            </a>);
        } else if (attachment.contentType.match('^image/')) {
            return <img src={attachment.content} draggable={false} />;
        } else if (attachment.contentType === 'text/plain') {
            return attachment.content;
        } else {
            return null;
        }
    }
}

class ConversationalUIDemo extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.state = { messages: conversation };
    }

    render() {
        return (
            <div>
                <Chat
                    messages={this.state.messages}
                    user={user}
                    onMessageSend={this.addNewMessage}
                    width={400}
                    attachmentTemplate={AttachmentTemplate}
                />
                <button
                    onClick={() => { this.forceUpdate(); }}
                    className="k-button"
                    id="btn-rerender"
                >
                    Re-render
                </button>
            </div>
        );
    }

    addNewMessage = (event) => {
        this.setState((prevState) => {
            return { messages: [...prevState.messages, event.message] };
        });
    }
}

export default ConversationalUIDemo;
