import './style.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Navigation from './components/navigation/Navigation';
import Main from './containers/main/Main';
import Footer from './containers/footer/Footer';
import Page from './containers/page/Page';

const store = configureStore();

const App = () => (
    <Provider store={store}>
      <div>
        <Navigation/>
        <Page>
          <Main/>
        </Page>
        <Navigation toTop={true}/>
      </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));