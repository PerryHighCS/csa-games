import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { APPTITLE } from './util/appconstants';

describe('App', () => {
  it('renders app title', () => {
    render(<App />);
    expect(screen.getByText(APPTITLE)).toBeInTheDocument();
  });
});
