import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { AppTexts } from './App.texts';

it('renders Basic React Redux Apollo App', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(AppTexts.get('titleApp'))).toBeInTheDocument();
});
