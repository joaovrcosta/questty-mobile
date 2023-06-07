import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const AvatarContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 100px;
  width: ${RFValue(123)}px;
  height: ${RFValue(123)}px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(122)}px;
  height: ${RFValue(122)}px;
  border-radius: 100px;
`;
