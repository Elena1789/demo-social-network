import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';
import {Provider} from 'react-redux';
import { BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom'
import store from './redux/redux-store';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <SamuraiJSApp />
      </Provider>
    </BrowserRouter>, div
  );

  ReactDOM.unmountComponentAtNode(div);
});
