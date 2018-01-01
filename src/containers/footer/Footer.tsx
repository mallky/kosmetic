import './Footer.less';

import * as React from 'react';

import Button from '../../components/button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';
import { scrollFunc } from '../../utils/functions';

interface FooterProps {

}

export default class Footer extends React.Component<FooterProps, {}> {
  toTop() {
    const start = window.pageYOffset;
    const end = 0;

    scrollFunc(start, end, -1);
  }
  
  render() {
    return (
      <Wrapper type="default no-margin">
        <div id="footer">
          <div>
            <Button
              class="footer-btn-to-top"
              type="only-inner"
              icon="fa-chevron-up"
              onClick={this.toTop.bind(this)}>
            </Button>
            <span>To top</span>
          </div>
          <div className="follow-us">
            <p>Follow us:</p>
            <ul>
              <li>
                <i className="fa fa-vk"/>
                <a href="https://vk.com/id33600277" target="_blank">Makar Kuzmichev</a>
              </li>
              <li>
                <i className="fa fa-twitter"/>
                <a href="https://vk.com/id33600277" target="_blank">Makar Kuzmichev</a>
              </li>
            </ul>
          </div>
          <div>
            <i className="fa fa-copyright"/> 2018
          </div>
        </div>
      </Wrapper>
    );
  }
}