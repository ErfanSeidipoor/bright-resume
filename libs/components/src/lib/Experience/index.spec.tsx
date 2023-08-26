import { render, screen } from '@testing-library/react';

import Experience from '.';

describe('Experience Component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Experience />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeDefined();
    expect(baseElement).toBeTruthy();
  });
});
