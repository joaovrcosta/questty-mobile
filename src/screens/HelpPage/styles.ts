import { RFValue } from "react-native-responsive-fontsize";
import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background};
padding: 0px 16px;
`;

export const HelpInfo = styled.View`
margin-top: 16px;
`;

export const HelpText = styled.Text`
font-size: ${RFValue(24)}px;
font-weight: bold;
text-align: justify;
line-height: 32.5px;`;

export const HelpSubText = styled.Text`
font-weight: thin;
font-size: ${RFValue(15)}px;
line-height: 25px;
text-align: justify;`;