import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import { Card } from '../index';

describe('Card', () => {
  it('should render the title and value', () => {
    const title = 'Test title';
    const value = 42;
  
    const { getByText } = render(<Card title={title} value={value} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(String(value))).toBeInTheDocument();

  });

  it('should NOT render the help text', () => {
    const title = 'Test title';
    const value = 42;
    const helpText = 'Help text1';

    render(<Card title={title} value={value} helpText={helpText} />);
  
    const headingElement = screen.getByText(helpText);
    expect(headingElement).not.toBeNull();
  });

  
  it('should render the help text if provided', () => {
    const helpText = 'Test Help Text';
    const { getByText } = render(<Card title="Test Title" value={null} helpText={helpText} />);

    expect(getByText(helpText)).toBeInTheDocument();
  });
});



