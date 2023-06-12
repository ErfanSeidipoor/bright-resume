import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import TextField from '.';

const renderComponent = () => {
  const { baseElement } = render(
    <TextField value="" setValue={() => undefined} />
  );

  return { baseElement };
};

describe('TextField Component', () => {
  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeDefined();
    expect(baseElement).toBeTruthy();
  });

  it('show input after user clicked', async () => {
    renderComponent();
    const title = screen.getByRole('heading', { level: 2 });
    user.click(title);
    const input = await screen.findByRole('textbox');
    expect(input).toBeDefined();
  });
});
