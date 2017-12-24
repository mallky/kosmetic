import './Button.less';

import * as React from 'react';

interface ButtonProps {
    type?: string;
    class?: string;
    children?: any;
    onClick?: (e: any) => void;
}

export default class Button extends React.Component<ButtonProps, {}> {
    render() {
        return (
            <button
              className={`${this.props.type || 'default'} ${this.props.class}`}
              onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}
