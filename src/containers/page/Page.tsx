import './Page.less';

import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';

import { setId } from '../../redux/application';
import { IStore } from './../../store';
import { toJSON } from './../../utils/functions';

interface PageProps extends DispatchProp<IStore>, React.HTMLProps<HTMLAllCollection> {
  idForScroll?: string;
}

class Page extends React.Component<PageProps, {}> {
  componentDidMount() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', this.sendMessage.bind(this), false);
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }
  
  componentWillUnmount() {
    const form = document.querySelector('form');

    form.removeEventListener('submit', this.sendMessage.bind(this), false);
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }
  
  sendMessage (e: any) {
    e.preventDefault();

    const form = document.querySelector('form');
    const json = toJSON(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/telegram', true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log('DONE');
      }
      if (xhr.status !== 200) {
        console.log('MISTAKE');
      }
    };

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(json);

    form.reset();
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