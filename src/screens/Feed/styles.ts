import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Questions = styled.View`
  flex: 1;
  padding: 20px 16px;
`;

export const QuestionsList = styled.FlatList``;

export const ReloadNewQuestions = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_300};
  padding: 10px;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const InnerText = styled.Text`
  font-size: ${RFValue(28)}px;
`;

export const ReloadContainer = styled.View`
  padding: 0 16px;
`;
