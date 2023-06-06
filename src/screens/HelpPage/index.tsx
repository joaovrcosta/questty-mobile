import {
  Container,
  HelpInfo,
  HelpText,
  HelpSubText,
  SubContainer,
  SelectWrapper,
  SelectText,
} from "./styles";
import { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { PressableHelp } from "../../components/PressableHelp";
export function HelpPage() {
  const [topic, setTopic] = useState("Minha Conta");
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      id: 1,
      title: "Minha Conta",
      onPress: () => {
        setTopic("Minha Conta");
        setIsVisible(false);
      },
    },
    {
      id: 2,
      title: "Perguntas",
      onPress: () => {
        setTopic("Perguntas");
        setIsVisible(false);
      },
    },
    {
      id: 3,
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];
  const helpList = [
    {
      id: 1,
      topic: "Minha Conta",
      question: "Como faço para personalizar o meu feed?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt varius varius.",
    },
    {
      id: 2,
      topic: "Minha Conta",
      question: "Como posso modificar o meu email?",
      answer:
        "Morbi urna dolor, fermentum maximus nibh non, malesuada tempor purus. Praesent tincidunt blandit dui.",
    },
    {
      id: 3,
      topic: "Minha Conta",
      question: "Como faço para trocar a foto de perfil?",
      answer:
        "Fusce nibh massa, pulvinar sit amet nisl non, sagittis tempor urna. Aenean in sem tellus.",
    },
    {
      id: 4,
      topic: "Perguntas",
      question: "Pergunta",
      answer:
        "Fusce nibh massa, pulvinar sit amet nisl non, sagittis tempor urna. Aenean in sem tellus.",
    },
  ];
  return (
    <>
      <Container>
        <HelpInfo>
          <HelpText>Central de ajuda</HelpText>
          <HelpSubText>
            Aqui nesta central de ajuda você pode encontrar a resposta sobre o
            funcionamento de nossa plataforma. Filtre o resultado e leia sobre
          </HelpSubText>
        </HelpInfo>
      </Container>
      <SubContainer>
        <SelectWrapper>
          <Button title="Categorias" onPress={() => setIsVisible(true)} />
          <BottomSheet modalProps={{}} isVisible={isVisible}>
            {list.map((l) => (
              <ListItem
                key={l.id}
                containerStyle={l.containerStyle}
                onPress={l.onPress}
              >
                <ListItem.Content>
                  <ListItem.Title style={l.titleStyle}>
                    {l.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </BottomSheet>
          <SelectText>{topic}</SelectText>
        </SelectWrapper>

        {helpList.map(
          (data) =>
            data.topic === topic && (
              <PressableHelp
                key={String(data.id)}
                textTopic={data.topic}
                textAnswer={data.answer}
                textQuestion={data.question}
              />
            )
        )}
      </SubContainer>
    </>
  );
}
