import {
  HeaderWrapper,
  HeaderBox,
  Avatar,
  AvatarContainer,
  TextTest,
  UserBox,
  IconBell,
  QuesttyLogo,
  ImageBox,
  InputBox,
} from './styles';

import Logo from '../../assets/questty-logo.png';
import { useNavigation } from '@react-navigation/native'

export function HeaderComponent() {
  const Navigation = useNavigation<any>()

  const handleAvatarPress = () => {
    Navigation.navigate("Profile")
  }

  const handleLogoPress = () => {
    Navigation.navigate("Dashboard")
  }

  return (
    <>
      <HeaderBox>
        <HeaderWrapper>
          <ImageBox onPress={handleLogoPress}>
            <QuesttyLogo source={Logo} />
          </ImageBox>
          <InputBox>
            <TextTest>SearchInput</TextTest>
          </InputBox>
          <UserBox>
            <IconBell name="bell" />
            <AvatarContainer onPress={handleAvatarPress}>
              <Avatar
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/70654718?v=4',
                }}
              />
            </AvatarContainer>
          </UserBox>
        </HeaderWrapper>
      </HeaderBox>
    </>
  );
}
