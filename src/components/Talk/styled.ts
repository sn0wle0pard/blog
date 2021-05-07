import styled from '@emotion/styled'

export const Article = styled.article`
  display: flex;
  margin-bottom: 2rem;
`

export const Frame = styled.iframe`
  flex: none;
  overflow: hidden;
  border-radius: 12px;
`

export const Title = styled.h1`
  color: rgb(73, 80, 87);
  font-size: 1.75rem;
  margin: 0;
  word-break: keep-all;
`

export const Date = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: bold;
  color: rgb(134, 142, 150);
  padding: 0.5rem 0;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`

export const Description = styled.p`
  color: rgb(134, 142, 150);
  font-size: 16px;
  line-height: 25px;
  margin: 0px;
  padding: 0.5rem 0px;
`
