import React from 'react'
import { formatDate } from '../../utils/dateUtil'
import { Article, Description, Info, Title } from './styled'

interface Props {
  title: string
  date: string
  summary: string
}

export default function Post({ title, date, summary }: Props) {
  return (
    <Article>
      <Info>{formatDate(date)}</Info>
      <Title>{title}</Title>
      <Description>{summary}</Description>
    </Article>
  )
}
