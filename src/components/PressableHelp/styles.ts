import { RFValue } from "react-native-responsive-fontsize";
import styled from 'styled-components/native'

export const ResultInfo = styled.View`
padding: 10px 10px 10px ;
margin-top: 16px;
background-color: ${({ theme }) => theme.colors.yellow_400};
borderWidth: 1px;
borderColor: black;
`;

export const ResultTopicWrapper = styled.View`
padding: 0px 4px;
background-color: ${({ theme }) => theme.colors.white};
borderWidth: 1px;         
borderColor: ${({ theme }) => theme.colors.black};;
borderRadius: 8px;
width: 100px;
height: 30px;
`;

export const ResultTopic = styled.Text`
font-weight: thin;
font-size: ${RFValue(10)}px;
line-height: 25px;
text-align: center;
`;

export const ResultTitle = styled.Text`
font-weight: thin;
font-size: ${RFValue(15)}px;
line-height: 25px;
text-align: center;
`;

export const ResultContentWrapper = styled.View`
padding: 10px 4px;
background-color: ${({ theme }) => theme.colors.white};
borderWidth: 1px;         
borderColor: ${({ theme }) => theme.colors.black};

`;

export const ResultContent = styled.Text`
font-weight: thin;
font-size: ${RFValue(15)}px;
line-height: 25px;
text-align: justify;`;

