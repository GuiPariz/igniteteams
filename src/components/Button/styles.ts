import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { DefaulTheme } from "styled-components";

export type ButtonTypeStyleProps = "Primary" | "Secondary";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({
    theme,
    type,
  }: {
    theme: DefaulTheme;
    type: ButtonTypeStyleProps;
  }) => (type === "Primary" ? theme.COLORS.GREEN : theme.COLORS.RED)};
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaulTheme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }: { theme: DefaulTheme }) =>
    theme.FONT_FAMILY.BOLD};

  color: ${({ theme }: { theme: DefaulTheme }) => theme.COLORS.WHITE};
`;
