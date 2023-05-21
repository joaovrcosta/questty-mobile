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
} from "./styles";

import Logo from "../../assets/questty-logo.png";

export function HeaderComponent() {
  return (
    <>
      <HeaderBox>
        <HeaderWrapper>
          <ImageBox>
            <QuesttyLogo source={Logo} />
          </ImageBox>
          <InputBox>
            <TextTest>SearchInput</TextTest>
          </InputBox>
          <UserBox>
            <IconBell name="bell" />
            <AvatarContainer>
              <Avatar
                source={{
                  uri: "https://avatars.githubusercontent.com/u/70654718?v=4",
                }}
              />
            </AvatarContainer>
          </UserBox>
        </HeaderWrapper>
      </HeaderBox>
    </>
  );
}
