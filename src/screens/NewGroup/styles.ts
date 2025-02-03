import styled, { DefaultTheme } from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }:{theme:DefaultTheme}) => theme.COLORS.GRAY_600};
  padding: 24px;

`

export const Content = styled.View`

  flex: 1;
  justify-content: center;

`

export const Icon = styled(UsersThree).attrs<{ theme: DefaultTheme }>((props: any) => ({
    size: 56,
    color: props.theme.COLORS.GREEN,
}))`

  align-self: center;

`