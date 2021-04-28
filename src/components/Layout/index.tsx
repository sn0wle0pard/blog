import { css, Global } from '@emotion/react'
import React, { ReactNode } from 'react'

import Header from '../Header'
import { Content } from './styled'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: sans-serif;
          }
        `}
      />
      <Header />
      <Content>{children}</Content>
    </>
  )
}
