import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px 16px;
`;

export const QuestionInfo = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  flex-direction: row;
`;

export const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const AvatarWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50px;
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(28)}px;
  height: ${RFValue(28)}px;
  border-radius: 50px;
`;

export const AuthorUsername = styled.Text`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  font-size: ${RFValue(12)}px;
`;

export const Datetime = styled.Text`
  color: ${({ theme }) => theme.colors.blue_950};
`;

export const Category = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

// Question Content

export const QuestionContent = styled.View`
  margin-top: 16px;
`;

export const QuestionText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  text-align: justify;
  line-height: 32.5px;
`;

export const QuestionSubText = styled.Text`
  font-weight: thin;
  font-size: ${RFValue(15)}px;
  line-height: 25px;
  text-align: justify;
`;

// Answer Button

export const AnswerButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.blue_500};
  padding: 16px;
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const AnswerButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const IconPlus = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(24)}px;
`;
