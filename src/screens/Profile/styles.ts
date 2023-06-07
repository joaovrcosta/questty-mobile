import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  /* background-color: red; */
  padding: 16px;
`;

export const Username = styled.Text`
  margin-top: 16px;
  font-size: ${RFValue(20)}px;
`;

export const LoginDate = styled.Text`
  margin-top: 16px;
  font-size: ${RFValue(14)}px;
`;

export const QuestionsContainer = styled.View``;

export const Title = styled.Text`
  margin-top: 48px;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

export const Questions = styled.View``;

export const QuestionsList = styled.FlatList`
  margin-top: 16px;
`;
