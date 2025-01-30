import styled from "styled-components/native";
import { DefaulTheme } from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;

  font-size: ${({theme}:{theme : DefaulTheme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}:{theme : DefaulTheme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}:{theme : DefaulTheme}) => theme.COLORS.GRAY_300};
`;
