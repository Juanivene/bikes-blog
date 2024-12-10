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

  // Verificar los diferentes tipos de alerta
  // it('renders the correct icon for each alert type', () => {
  //   const types = ['error', 'info', 'success', 'warning', 'loading'] as const;

  //   types.forEach((type) => {
  //     render(<Alert type={type}>Alert with {type} type</Alert>);
  //     const alert = screen.getByText(`Alert with ${type} type`);
  //     expect(alert).toBeInTheDocument();

  //     // Check the correct background class for each type
  //     expect(renderComponent.firstChild).toHaveClass(
  //       type === 'loading'
  //         ? 'bg-gray-100 dark:bg-gray-800'
  //         : `bg-${type}-200 dark:bg-${type}-800`
  //     );

  //     // Check if the correct icon is rendered
  //     if (type === 'loading') {
  //       expect(screen.getByRole('status')).toBeInTheDocument();
  //     } else {
  //       const icon = screen.getByTestId(`alert-icon-${type}`);
  //       expect(icon).toBeInTheDocument();
  //     }
  //   });
  // });

  // Verificar que no se renderiza el ícono si hideIcon es true
  // it('does not render an icon when hideIcon is true', () => {
  //   render(<Alert hideIcon>No Icon Alert</Alert>);
  //   const icon = screen.queryByRole('img');
  //   expect(icon).not.toBeInTheDocument();
  // });

  // Verificar que se renderiza con la clase adecuada
  it('applies the correct classes based on the type', () => {
    const { container } = render(<Alert type="error">Error Alert</Alert>);
    expect(container.firstChild).toHaveClass('bg-red-200', 'dark:bg-red-800');
  });

  // Verificar el ancho del texto dependiendo de las props
  // it('calculates the correct text width based on props', () => {
  //   const { container: defaultContainer } = render(<Alert>Default Alert</Alert>);
  //   expect(defaultContainer.querySelector('[data-testid="alert"]')).toHaveClass('xs:12');

  //   const { container: closableContainer } = render(<Alert closable>Closable Alert</Alert>);
  //   expect(closableContainer.querySelector('[data-testid="alert"]')).toHaveClass('xs:11');

  //   const { container: hideIconContainer } = render(<Alert hideIcon>Hide Icon Alert</Alert>);
  //   expect(hideIconContainer.querySelector('[data-testid="alert"]')).toHaveClass('xs:11');
  // });

  // Verificar accesibilidad general
  // it('is accessible', () => {
  //   render(<Alert aria-label="Accessible Alert">Accessible Alert</Alert>);
  //   const alert = screen.getByLabelText('Accessible Alert');
  //   expect(alert).toBeInTheDocument();
  // });

  // Verificar que se oculta si open es false
  // it('is hidden when open is false', () => {
  //   const { container } = render(<Alert>Hidden Alert</Alert>);
  //   fireEvent.click(screen.getByRole('button', { name: /cerrar/i }));
  //   expect(container.firstChild).toHaveClass('hidden');
  // });
});
