import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);
    
    // Verify that the logo is rendered
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
    
    // Verify that the text "Edit src/App.tsx and save to reload." is present
    const textElement = screen.getByText(/edit src\/App\.tsx and save to reload\./i);
    expect(textElement).toBeInTheDocument();
    
    // Verify that the "Learn React" link is rendered with the correct URL
    const linkElement = screen.getByRole('link', { name: /learn react/i });
    expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
  });
});