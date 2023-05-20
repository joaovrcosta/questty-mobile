import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 20px 16px;
  height: ${RFValue(170)}px;
  margin-bottom: 16px;
`;

export const UserInfo = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 16px;
`;

export const AvatarContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50px;
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(28)}px;
  height: ${RFValue(28)}px;
  border-radius: 50px;
`;

export const Username = styled.Text`
  margin-left: 8px;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const QuestionHeader = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const CategoryName = styled.Text`
  text-transform: uppercase;
`;

export const QuestionDate = styled.Text``;

export const QuestionBody = styled.View``;

export const Content = styled.Text`
  margin-top: 16px;
  font-size: ${RFValue(14)}px;
`;

export const AnswerButton = styled.View``;
