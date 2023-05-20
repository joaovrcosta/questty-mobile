import React from "react";

import {
  Container,
  UserInfo,
  AvatarContainer,
  UserAvatar,
  Username,
  QuestionHeader,
  CategoryName,
  QuestionDate,
  QuestionBody,
  Content,
  AnswerButton,
} from "./styles";

interface QuestionCardProps {
  data: {
    username: string;
    category: string;
    date: string;
    content: string;
  };
}

export function QuestionCard({ data }: QuestionCardProps) {
  return (
    <>
      <Container>
        <QuestionHeader>
          <UserInfo>
            <AvatarContainer>
              <UserAvatar
                source={{
                  uri: "https://avatars.githubusercontent.com/u/70654718?v=4",
                }}
              />
            </AvatarContainer>
            <Username>{data.username}</Username>
          </UserInfo>
          <CategoryName>{data.category}</CategoryName>
          <QuestionDate>{data.date}</QuestionDate>
        </QuestionHeader>
        <QuestionBody>
          <Content>{data.content}</Content>
          <AnswerButton></AnswerButton>
        </QuestionBody>
      </Container>
    </>
  );
}
