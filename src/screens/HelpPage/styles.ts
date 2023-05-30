import { RFValue } from "react-native-responsive-fontsize";
import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background};
padding: 0px 16px 20px;
`;
export const SubContainer = styled.View`
background-color: ${({ theme }) => theme.colors.blue_100};
flex: 4;
borderWidth: 1px;
padding: 15px 19px;
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

export const SelectWrapper = styled.View`
flexDirection: row;
justifyContent: space-between;
`;

export const SelectText = styled.Text`
font-size: ${RFValue(15)}px;
line-height: 25px;
font-weight: bold;
`;
