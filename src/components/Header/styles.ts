import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { EvilIcons } from "@expo/vector-icons";

export const HeaderBox = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  background-color: ${({ theme }) => theme.colors.background};

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  padding: 0px 16px;
  margin-top: ${getStatusBarHeight() + RFValue(20)};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50px;
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  margin-left: 16px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 50px;
`;

export const TextTest = styled.Text`
  color: ${({ theme }) => theme.colors.blue_950};
`;

export const UserBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const IconBell = styled(EvilIcons)`
  color: ${({ theme }) => theme.colors.blue_950};
  font-size: ${RFValue(28)}px;
`;

export const QuesttyLogo = styled.Image`
  width: ${RFValue(72)}px;
  height: ${RFValue(24)}px;
`;

export const ImageBox = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const InputBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
