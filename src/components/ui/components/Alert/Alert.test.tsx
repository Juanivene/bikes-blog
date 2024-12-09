import { render, screen } from '@testing-library/react';

import Alert from './Alert';

describe('Alert Component', () => {
  it('snapshot', () => {
    const { container } = render(<Alert>Default Alert</Alert>);

    expect(container).toMatchSnapshot();
  });

  it('renders the alert with default props', () => {
    render(<Alert>Default Alert</Alert>);

    const alert = screen.getByText('Default Alert');
    expect(alert).toBeInTheDocument();
  });
});
