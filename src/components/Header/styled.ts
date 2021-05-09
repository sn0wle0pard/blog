import styled from '@emotion/styled'

export const Layout = styled.header`
  position: sticky;
  top: 0;
  padding: 0.85rem 0;
  border-bottom: 1px solid #f1f3f5;
  background-color: white;
`

export const Content = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.a`
  font-weight: bold;
  text-decoration: none;
  font-size: 1.25rem;
  color: #343a40;
`

export const Nav = styled.nav`
  a {
    color: #495057;
    text-decoration: none;

    + a {
      margin-left: 1rem;
    }
  }
`