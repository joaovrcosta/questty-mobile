import styled from 'styled-components/native';
import { Octicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 0px 16px;
`;

export const SelectModal = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.blue_500};
  padding: 16px;
  border-radius: 9px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const SelectModalText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const IconGear = styled(Octicons)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(24)}px;
`;
