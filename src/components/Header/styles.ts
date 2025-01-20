import styled, { DefaultTheme } from "styled-components/native";
import {CaretLeft} from 'phosphor-react-native'


export const Container = styled.View`

 width: 100%;
 flex-direction: row;
 align-items: center;
 justify-content: center;
`;

export const Logo = styled.Image`
width: 46px;
height: 44px;
`

export const BackButton = styled.TouchableOpacity`

`
export const BackIcon = styled(CaretLeft).attrs<{ theme: DefaultTheme }>((props: any) => ({
    size: 36,
    color: props.theme.COLORS.WHITE
}))``;