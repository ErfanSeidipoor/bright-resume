import { render } from '@testing-library/react';

import DatePicker from '.';

describe('DatePicker Component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DatePicker />);
    expect(baseElement).toBeTruthy();
  });
});
