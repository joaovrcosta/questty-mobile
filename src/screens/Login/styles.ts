import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0px 50px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoImageContainer = styled.View`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
`;

export const LogoImage = styled.Image``;

export const LoginForm = styled.View``;

export const LabelContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const Label = styled.Text`
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue_950};
`;

export const ForgetBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ForgetText = styled.Text`
  padding: 8px 0px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.blue_500};
`;
