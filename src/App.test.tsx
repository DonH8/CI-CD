import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);
    
    // Verify that the text "Edit src/App.tsx and save to reload." is present
    const textElement = screen.getByText(/edit src\/App\.tsx and save to reload\./i);
    expect(textElement).toBeInTheDocument();
  });
});