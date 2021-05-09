import React from 'react'

import { Content, Layout, Logo, Nav } from './styled'

export default function Header() {
  return (
    <Layout>
      <Content>
        <Logo href="/">Explicit Knowledge</Logo>
        <Nav>
        <a href="https://hanlee.io">About</a>
        <a href="https://github.com/hahnlee">GitHub</a>
        </Nav>
      </Content>
    </Layout>
  )
}
