import './Button.less';

import * as React from 'react';

interface ButtonProps {
    type?: string;
    class?: string;
    children?: any;
    onClick?: (e: any) => void;
    icon?: string;
    label?: string;
}

export default class Button extends React.Component<ButtonProps, {}> {
    render() {
        return (
          <div>
              <button
                className={`${this.props.type || 'default'} ${this.props.class || ''}`}
                onClick={this.props.onClick}>
                  {this.props.icon ? <i className={`fa ${this.props.icon}`}/> : this.props.children}
              </button>
              {this.props.label ? <span className="button-label">{this.props.label}</span> : null}
          </div>
        );
    }
}
