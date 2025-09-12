import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { APPTITLE } from './util/appconstants';

test('renders app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(APPTITLE);
  expect(titleElement).toBeInTheDocument();
});
