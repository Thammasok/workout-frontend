import * as React from 'react'
import { render, RenderOptions } from '@testing-library/react'

const Providers = ({ children }: { children: React.ReactElement }) => {
  return children
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers as React.ComponentType, ...options })

export * from '@testing-library/react'
export { customRender as render }
