import * as S from './styles'
import logoImg from '@assets/Logo.png'


export default function Header() {

  return (
    <S.Container>
      <S.BackButton>
        <S.BackIcon />
      </S.BackButton>

      <S.Logo source={logoImg} />
    </S.Container>
  )

}