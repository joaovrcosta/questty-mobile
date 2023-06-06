import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px 16px 20px;
`;
export const SubContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_100};
  flex: 4;
  border-width: 1px;
  padding: 15px 19px;
`;

export const HelpInfo = styled.View`
  margin-top: 16px;
`;

export const HelpText = styled.Text`
  font-size: ${RFValue(24)}px; //In the font size, we need to set RFvalue
  font-weight: bold;
  text-align: justify;
  line-height: 32.5px;
`;

export const HelpSubText = styled.Text`
  font-weight: thin;
  font-size: ${RFValue(15)}px; //In the font size, we need to set RFvalue
  line-height: 25px;
  text-align: justify;
`;

export const SelectWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectText = styled.Text`
  font-size: ${RFValue(15)}px; //In the font size, we need to set RFvalue
  line-height: 25px;
  font-weight: bold;
`;
