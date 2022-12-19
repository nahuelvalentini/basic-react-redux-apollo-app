import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AppTexts } from './App.texts';
import Global from './layouts/Global/Global.layout';

it('renders Basic React Redux Apollo App', () => {
  render(
    <Global>
      {App}
    </Global>
  );

  expect(screen.getByText(AppTexts.get('titleApp'))).toBeInTheDocument();
});
