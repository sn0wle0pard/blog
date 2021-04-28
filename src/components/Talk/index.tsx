import React from 'react'
import { formatDate } from '../../utils/dateUtil'
import { Article, Frame, Date, Title, Info, Description } from './styled'

interface Props {
  title: string
  date: string
  youtubeId: string
  conference: string;
}

export function Talk({ title, date, youtubeId, conference }: Props) {
  return (
    <Article>
      <Frame
        width="425"
        height="225"
        src={`https://www.youtube.com/embed/${youtubeId}?controls=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Info>
        <Date>{formatDate(date)}</Date>
        <Title>{title}</Title>
        <Description>{conference}</Description>
      </Info>
    </Article>
  )
}
