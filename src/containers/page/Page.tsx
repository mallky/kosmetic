import './Page.less';

import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';

import { setId } from '../../redux/application';
import { IStore } from './../../store';

interface PageProps extends DispatchProp<IStore>, React.HTMLProps<HTMLAllCollection> {
  idForScroll?: string;
}

class Page extends React.Component<PageProps, {}> {
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }
  
  onScroll(e: any): void {
    const { dispatch } = this.props;
    const idForScroll = '';

    dispatch(setId(idForScroll));
  }

  render() {
    return (
      <div id="root" className="tab-list">
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, ownProps: PageProps) => ({
  idForScroll: state.application.idForScroll
});

export default connect<{}, {}, PageProps>(mapStateToProps)(Page);