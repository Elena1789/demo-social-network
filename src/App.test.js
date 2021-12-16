import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';
import {Provider} from 'react-redux';
import { BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom'
import store from './redux/redux-store';

/*test('renders learn react link', () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
  <App />
  </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

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
