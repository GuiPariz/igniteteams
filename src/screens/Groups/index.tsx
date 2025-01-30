import React from 'react'
import * as S from './styles'
import Header from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
export function Groups() {
  return (
    <S.Container>
      <Header />
      <Highlight title='Titulo' subtitle='Subtitulo'/>
      <GroupCard title='Turma 01'/>
    </S.Container>
  )
}