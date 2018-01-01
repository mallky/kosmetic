import './Footer.less';

import * as React from 'react';

import Button from '../../components/button/Button';
import { scrollFunc } from '../../utils/functions';

interface FooterProps {

}

export default class Footer extends React.Component<FooterProps, {}> {
  toTop(e) {
    const start = e.target.getBoundingClientRect().top + pageYOffset - window.innerHeight;
    const end = 0;
    console.log(start);
    scrollFunc(start, end, -1);
  }
  
  render() {
    return (
      <div id="footer">
        <Button
          class="footer-btn-to-top"
          type="only-inner"
          onClick={this.toTop.bind(this)}>
          <i className="fa fa-angle-up"/>
        </Button>

          <i className="fa fa-vk fa-spin"/>
          <i className="fa fa-twitter"/>
          <i className="fa fa-camera-retro"/>
          <i className="fa fa-bomb"/>
          <i className="fa fa-bomb"/>

      </div>
    );
  }
}