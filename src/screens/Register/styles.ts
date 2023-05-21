import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

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

export const SignUpForm = styled.View``;

export const LabelContainer = styled.View`
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;

export const TermsInfoContainer = styled.View`
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const TermsInfo = styled.Text`
  text-align: center;
  font-size: ${RFValue(14)}px;
`;
