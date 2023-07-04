import { render } from '@testing-library/react';

import AboutMe from '.';

describe('AboutMe Component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutMe />);
    expect(baseElement).toBeTruthy();
  });
});
