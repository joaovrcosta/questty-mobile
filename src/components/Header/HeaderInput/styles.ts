import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 170px;
  height: 40px;
  padding: 16px 18px;

  font-size: ${RFValue(14)}px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;

  margin-bottom: 16px;
`;
