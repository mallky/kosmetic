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

    form.addEventListener('submit', e => {
      e.preventDefault();

      const json = toJSON(form);
      console.log(json);
      //создаем соединение
      const formReq = new XMLHttpRequest();
      formReq.open('POST', '/telegram', true);
      formReq.onload = function(oEvent) {
        if (formReq.status === 200) {
          console.log('done');
        }
        if (formReq.status !== 200) {
          console.log('misstake');
        }
      };
      ////////////////////////////
      ////////////////////////////
      formReq.setRequestHeader('Content-Type', 'application/json');
      //отправляем
      formReq.send(json);
    });
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