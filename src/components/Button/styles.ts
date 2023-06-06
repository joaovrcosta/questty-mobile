import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export type borderVariants = 'blue_500' | 'yellow_500';

interface IButton {
  backgroundColor: borderVariants;
}

export const SignInButton = styled.TouchableOpacity<IButton>`
  display: flex;
  align-items: center;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  border-radius: 8px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const SignInButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
