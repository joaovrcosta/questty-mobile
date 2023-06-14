import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 106px 50px 50px;
`;

export const MakeQuestionContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  flex: 1;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormItemsContainer = styled.View``;

export const TextArea = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 8px;
`;
