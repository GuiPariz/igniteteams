import { TextInput } from 'react-native'
import styled, { DefaultTheme } from 'styled-components/native'

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({theme}:{theme: DefaultTheme}) => theme.COLORS.GRAY_700};
  font-family: ${({theme}:{theme: DefaultTheme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}:{theme: DefaultTheme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}:{theme: DefaultTheme}) => theme.COLORS.WHITE};
  border-radius: 6px;
  padding: 16px;
  margin: 10px 0;

`