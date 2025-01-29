import * as S from './styles'
import logoImg from '@assets/Logo.png'


type props = {

  showBackButton?: boolean;
}

export default function Header({ showBackButton = false }: props) {

  return (
    <S.Container>
      {showBackButton &&
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>}

      <S.Logo source={logoImg} />
    </S.Container>
  )

}