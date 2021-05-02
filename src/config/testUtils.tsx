import '@testing-library/jest-dom';
import { RenderOptions, render } from '@testing-library/react';
import React, { ReactElement } from 'react';

import { BrowserRouter } from 'react-router-dom';

import MaterialTheme from './Theme';

const AllTheProviders: React.FC = ({ children }) => (
        <MaterialTheme>
            <BrowserRouter>
              {children}
            </BrowserRouter>
        </MaterialTheme>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AllTheProviders, ...options });
// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
