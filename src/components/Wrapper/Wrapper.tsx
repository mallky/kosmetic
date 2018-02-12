import './Wrapper.less';

import * as React from 'react';
import Button from '../button/Button';
import { scrollFunc } from '../../utils/functions';

interface WrapperProps {
  type?: string;
  children?: any;
  ident?: string;
  header?: string;
  toTopBtn?: boolean;
}

export default class Wrapper extends React.Component<WrapperProps, {}> {
  toTop(e) {
    const start = window.pageYOffset;
    const end = 0;

    scrollFunc(start, end, -1);
  }

  render() {
    return (
      <div id={this.props.ident} className={`wrapper ${this.props.type || 'default'}`}>
        {this.props.header ? <h2 className='wrapper-header'>{this.props.header}</h2> : null}
        <div>
          {this.props.children}
        </div>
        {this.props.toTopBtn ? <Button
          class="footer-btn-to-top"
          type="only-inner"
          icon="fa-angle-up"
          label="Наверх"
          onClick={this.toTop.bind(this)}/> : null}
      </div>
    );
  }
}
