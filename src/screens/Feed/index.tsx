import {
  Container,
  HeaderWrapper,
  Header,
  Avatar,
  AvatarContainer,
  TextTest,
  UserBox,
  IconBell,
  QuesttyLogo,
  ImageBox,
  InputBox,
  Questions,
  QuestionsList,
} from "./styles";

import { getBottomSpace } from "react-native-iphone-x-helper";

import { Text } from "react-native";

import Logo from "../../assets/questty-logo.png";
import { QuestionCard } from "../../components/QuestionCard";

export function Dashboard() {
  const data = [
    {
      category: "biologia",
      username: "joaovrcosta",
      content: "Uma pergunta simples ok",
      date: "20/05/2023",
    },
    {
      category: "biologia",
      username: "joaovrcosta",
      content: "Uma pergunta simples ok",
      date: "20/05/2023",
    },
    {
      category: "biologia",
      username: "joaovrcosta",
      content: "Uma pergunta simples ok",
      date: "20/05/2023",
    },
    {
      category: "biologia",
      username: "joaovrcosta",
      content: "Uma pergunta simples ok",
      date: "20/05/2023",
    },
  ];

  return (
    <>
      <Container>
        <Header>
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
        </Header>

        <Questions>
          <QuestionsList
            data={data}
            renderItem={({ item }) => <QuestionCard data={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: getBottomSpace(),
            }}
          />
        </Questions>
      </Container>
    </>
  );
}
