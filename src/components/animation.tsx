import * as React from 'react';
import { Slide, Expand, Fade, Zoom, Push, Reveal } from '@progress/kendo-react-animation';
import '@progress/kendo-theme-default/dist/all.css';
import './animation.css';

interface AppState {
    animationType?: string;
    show?: boolean;
}
class AnimationDemo extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            animationType: 'zoom',
            show: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({ animationType: event.target.value });
    }
    render() {
        const { show } = this.state;

        const children = show ? (
            <div
                className="zoom"
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'red'
                }}
            >Content;
            </div >
        ) : null;

        const animProps = {
            transitionEnterDuration: 1800,
            transitionExitDuration: 1800
        };

        let animation;
        switch (this.state.animationType) {
            case 'slide':
                animation = (<Slide {...animProps}>{children}</Slide>);
                break;
            case 'push':
                animation = (<Push {...animProps}>{children}</Push>);
                break;
            case 'expand':
                animation = (<Expand {...animProps}>{children}</Expand>);
                break;
            case 'fade':
                animation = (<Fade {...animProps}>{children}</Fade>);
                break;
            case 'zoom':
                animation = (<Zoom  {...animProps}>{children}</Zoom>);
                break;
            case 'reveal':
                animation = (<Reveal {...animProps}>{children}</Reveal>);
                break;
            default: animation = (<Zoom {...animProps}>{children}</Zoom>); break;
        }

        return (
            <div style={{ position: 'relative' }}>
                {animation}
                <div style={{ position: 'absolute', right: '300px', top: '0px' }}>
                    <label htmlFor="">
                        <input
                            onClick={this.handleSubmit}
                            name="type"
                            type="radio"
                            value="slide"
                        />
                        slide
                        </label>
                    <br />
                    <label htmlFor="">
                        <input
                            onClick={this.handleSubmit}
                            name="type"
                            type="radio"
                            value="push"
                        />
                        push
                </label>
                    <br />

                    <label htmlFor="">
                        <input
                            onClick={this.handleSubmit}
                            name="type"
                            type="radio"
                            value="expand"
                        />
                        expand
                </label>
                    <br />

                    <label htmlFor="">
                        <input
                            onClick={this.handleSubmit}
                            name="type"
                            type="radio"
                            value="fade"
                        />
                        fade
                </label>
                    <br />
                    <label htmlFor="">
                        <input
                            onClick={this.handleSubmit}
                            name="type"
                            type="radio"
                            value="zoom"
                        />
                        zoom
                </label>
                    <br />
                    <label htmlFor="">
                        <input
                            onClick={this.handleSubmit}
                            name="type"
                            type="radio"
                            value="reveal"
                        />
                        reveal
                    <br />
                    </label>
                    <button type="submit" onClick={() => this.setState({ show: !this.state.show })}>Animate</button>
                </div>
            </div>
        );
    }
}

export default AnimationDemo;
