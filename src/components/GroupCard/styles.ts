import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { DefaulTheme } from "styled-components";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }: { theme: DefaulTheme }) =>
    theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaulTheme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: { theme: DefaulTheme }) =>
    theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: { theme: DefaulTheme }) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(UsersThree).attrs<{ theme: DefaultTheme }>(( props: any ) => ({
    size: 36,
    color: props.theme.COLORS.GREEN_DARK,
    weight:'fill',
  })
)`
  margin: 20px;
`;
