import { Container, Questions, QuestionsList } from "./styles";

import { getBottomSpace } from "react-native-iphone-x-helper";

import { QuestionCard } from "../../components/QuestionCard";
import { SelectCategory } from "../../components/SelectCategory";

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
        <SelectCategory name="Matérias"></SelectCategory>

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
