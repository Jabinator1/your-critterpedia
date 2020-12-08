import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import store from './redux/store';
import { fetchCritters } from './redux/slices/crittersSlice';
import { getUserSession } from './redux/slices/userSlice';

store.dispatch(fetchCritters())
store.dispatch(getUserSession())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);