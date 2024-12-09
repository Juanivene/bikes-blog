import { render, screen } from '@testing-library/react';

import Alert from './Alert';

describe('Alert Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // Renderizamos el componente una sola vez antes de cada prueba
    const renderResult = render(<Alert>Default Alert</Alert>);
    container = renderResult.container;
  });

  it('snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('renders the alert with default props', () => {
    const alert = screen.getByText('Default Alert');
    expect(alert).toBeInTheDocument();
  });
});
