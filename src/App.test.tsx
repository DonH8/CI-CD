import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);
    
    // Verify that the logo is rendered
    const logoElement = screen.getByAltText('logo2');
    expect(logoElement).toBeInTheDocument();
  });
});