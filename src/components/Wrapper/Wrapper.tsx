import './Wrapper.less';

import * as React from 'react';

interface WrapperProps {
  type?: string;
  children?: any;
  ident?: string;
}

export default class Wrapper extends React.Component<WrapperProps, {}> {
  render() {
    return (
      <div id={this.props.ident} className={`wrapper ${this.props.type || 'default'}`}>{this.props.children}</div>
    );
  }
}
