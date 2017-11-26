import './Button.less';

import * as React from 'react';

interface ButtonProps {
    type?: string;
    children?: string;
    onClick?: (e: any) => void;
}

export default class Button extends React.Component<ButtonProps, {}> {
    render() {
        return (
            <button className={this.props.type} onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}
