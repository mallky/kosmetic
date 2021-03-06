import './Navigation.less';

import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';

import Button from './../../components/button/Button';
import * as constants from '../../utils/constants';
import { scrollFunc } from '../../utils/functions';

import { setSection, setId } from '../../redux/application';
import { IStore } from './../../store';

interface HeaderProps extends DispatchProp<IStore>, React.HTMLProps<HTMLAllCollection> {
  section?: string;
  idForScroll?: string;
  toTop?: boolean;
}

class Header extends React.Component<HeaderProps, {}> {
  componentWillReceiveProps(nextProps) {
    const elem = document.getElementById(nextProps.idForScroll);

    if (elem) {
      const start = this.props.toTop ? window.pageYOffset : 0;
      const direction = this.props.toTop ? -1 : 1;
      const top = elem.getBoundingClientRect().top - direction * window.pageYOffset;

      scrollFunc(start, top, direction);
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
        type='navigation'
        onClick={this.handlerClick.bind(this)}>
        <a href={`#${constants.num[index]}`} onClick={this.scroll.bind(this)}>{list}</a>
      </Button>;
    });
  }
    
  render() {
    return (
      <div className="nav-wrap">
        <nav className="tab-list">
          {this.renderTabList()}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, ownProps: HeaderProps) => ({
  section: state.application.section,
  idForScroll: state.application.idForScroll
});

export default connect<{}, {}, HeaderProps>(mapStateToProps)(Header);