import { ReactNode } from 'react'

import Header from '../Header'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
