import { render } from '@testing-library/react';

import { WorldGenerator } from './world-generator';

describe('WorldGenerator', () => {
  it('should render successfully', () => {
    const { container } = render(<WorldGenerator />);
    expect(container).toBeTruthy();
  });
});
