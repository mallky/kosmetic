import './Header.less';

import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';

import Button from './../../components/button/Button';
import * as constants from '../../utils/constants';

import { setSection, setId } from '../../redux/application';
import { IStore } from './../../store';

interface HeaderProps extends DispatchProp<IStore>, React.HTMLProps<HTMLAllCollection> {
  section?: string;
  idForScroll?: string;
}

class Header extends React.Component<HeaderProps, {}> {
  componentWillReceiveProps(nextProps) {
    const elem = document.getElementById(nextProps.idForScroll);

    if (elem) {
      const top = elem.getBoundingClientRect().top - window.pageYOffset;
      let start = 0;

      const scroll = setInterval(() => {
        if (start === top) {
          clearInterval(scroll);
        } else {
          start = start > top ? top : start + top / 20;
          window.scroll(0, start);
        }
      }, 10);
    }
  }

  handlerClick(event: any): void {
    const { dispatch } = this.props;
    const value = event.target.textContent;

    dispatch(setSection(value));
  }

  scroll(e: any): void {
    e.preventDefault();
    const { dispatch } = this.props;
    const idForScroll = e.target.getAttribute('href').substring(1);

    dispatch(setId(idForScroll));
  }
    
  renderTabList(): Array<any> {
    return constants.tabList.map((list, index) => {
      return <Button
        key={list}
        type='link'
        onClick={this.handlerClick.bind(this)}>
        <a href={`#${constants.num[index]}`} onClick={this.scroll.bind(this)}>{list}</a>
      </Button>;
    });
  }
    
  render() {
    return (
      <header>
        <div>

        </div>
        <div className="tab-list">
          {this.renderTabList()}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state: IStore, ownProps: HeaderProps) => ({
  section: state.application.section,
  idForScroll: state.application.idForScroll
});

export default connect<{}, {}, HeaderProps>(mapStateToProps)(Header);