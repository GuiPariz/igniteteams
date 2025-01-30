import { useState } from 'react'
import React from 'react'
import * as S from './styles'
import Header from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { EmptyList } from '@components/EmptyList'
import { FlatList } from 'react-native'
export function Groups() {

  const [groups, setGroups] = useState<string[]>(['Turma 1', 'Turma 2'])

  return (
    <S.Container>
      <Header />
      <Highlight title='Titulo' subtitle='Subtitulo' />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => <EmptyList message='Sem turmas'/>}
      />
    </S.Container>
  ) 
}