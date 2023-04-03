import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../index';

describe('Card', () => {
  it('should render the title and value', () => {
    const title = 'Test Title';
    const value = 42;
    const { getByText } = render(<Card title={title} value={value} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(String(value))).toBeInTheDocument();
  });

  it('should render the help text if provided', () => {
    const helpText = 'Test Help Text';
    const { getByText } = render(<Card title="Test Title" value={null} helpText={helpText} />);

    expect(getByText(helpText)).toBeInTheDocument();
  });
});
