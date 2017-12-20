import './style.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Header from './containers/header/Header';
import Main from './containers/main/Main';
import Footer from './containers/footer/Footer';
import Page from './containers/page/Page';

const store = configureStore();

const App = () => (
    <Provider store={store}>
      <Page>
        <Header/>
        <Main/>
        <Footer/>
      </Page>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));