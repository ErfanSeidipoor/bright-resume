import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import TextField, { TextFieldVariantEnum } from '.';

const renderComponent = () => {
  const { baseElement } = render(
    <TextField variant={TextFieldVariantEnum.lg} />
  );

  return { baseElement };
};

describe('TextField Component', () => {
  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toBeDefined();
    expect(baseElement).toBeTruthy();
  });

  it('show input after user clicked', async () => {
    renderComponent();
    const title = screen.getByRole('heading', { level: 3 });
    user.click(title);
    const input = await screen.findByRole('textbox');
    expect(input).toBeDefined();
  });
});
