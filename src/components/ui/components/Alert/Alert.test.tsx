import { fireEvent, render, screen } from '@testing-library/react';

import Alert from './Alert';

describe('Alert Component', () => {
  let renderComponent: HTMLElement;

  beforeEach(() => {
    // Renderizamos el componente una sola vez antes de cada prueba
    const renderResult = render(<Alert>Default Alert</Alert>);
    renderComponent = renderResult.container;
  });

  // Prueba de snapshot
  it('snapshot', () => {
    expect(renderComponent).toMatchSnapshot();
  });

  // Verificar renderizado con props por defecto
  it('renders the alert with default props', () => {
    const alert = screen.getByText('Default Alert');
    expect(alert).toBeInTheDocument();
  });

  // Verificar el cierre del componente
  it('closes the alert when the close button is clicked', () => {
    const { container } = render(<Alert closable>Closable Alert</Alert>);
    const closeButton = screen.getByRole('button', { name: /cerrar/i });
    fireEvent.click(closeButton);
    expect(container.firstChild).toHaveClass('hidden');
  });
});
