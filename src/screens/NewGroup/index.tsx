import Header from '@components/Header'
import { Highlight } from '@components/Highlight'
import * as S from './styles'
import { Button } from '@components/Button'

export function NewGroup (){
  return (
   <S.Container>
    <Header showBackButton/>
    <S.Content>
      <S.Icon/>
      <Highlight 
      title='Nova Turma'
      subtitle='crie uma turma'
      />
      <Button title='Criar'/>
    </S.Content>
   </S.Container> 
  )
}