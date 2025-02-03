import Header from '@components/Header'
import { Highlight } from '@components/Highlight'
import * as S from './styles'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

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
      <Input/>
      <Button title='Criar'/>
    </S.Content>
   </S.Container> 
  )
}