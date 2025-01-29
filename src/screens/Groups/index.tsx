import React from 'react'
import * as S from './styles'
import Header from '@components/Header'
import { Highlight } from '@components/Highlight'
export function Groups() {
  return (
    <S.Container>
      <Header />
      <Highlight title='Titulo' subtitle='Subtitulo'/>
    </S.Container>
  )
}