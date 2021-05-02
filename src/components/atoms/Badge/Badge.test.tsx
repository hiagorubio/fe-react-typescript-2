import { screen } from '@testing-library/react';

import React from 'react';

import { render } from '../../../config/testUtils';

import Badge from './index';

describe('Tests for Badge', () => {
  test('Should render Badge', async () => {
    const backgroundColor = '#FFFFFF';
    const color = '#999999';
    const text = 'Badge label';
    const margin = '0';

    render(
          <Badge
            backgroundColor={backgroundColor}
            color={color}
            text={text}
            margin={margin}
          />,
        );

    const badge = screen.getByTestId('badge');
    expect(badge).toBeDefined();
  });
});
