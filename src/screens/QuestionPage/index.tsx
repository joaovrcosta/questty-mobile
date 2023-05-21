import { Username } from "../../components/QuestionCard/styles";
import {
  Container,
  QuestionInfo,
  UserInfo,
  AvatarWrapper,
  Avatar,
  Datetime,
  Category,
  AuthorUsername,
  QuestionContent,
  QuestionText,
  QuestionSubText,
  AnswerButton,
  AnswerButtonText,
  IconPlus,
} from "./styles";

export function QuestionPage() {
  return (
    <Container>
      <QuestionInfo>
        <UserInfo>
          <AvatarWrapper>
            <Avatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/70654718?v=4",
              }}
            />
          </AvatarWrapper>
          <AuthorUsername>joaovrcosta</AuthorUsername>
        </UserInfo>
        <Datetime>• há 43 minutos</Datetime>
        <Category>Biologia</Category>
      </QuestionInfo>

      <QuestionContent>
        <QuestionText>
          Durante os séculos XVI e XVII, um dos temas mais debatidos pelos
          pensadores da Europa ocidental sobre a política era o conceito de
          Estado. O bispo francês Jacques Bossuet escreveu, em 1709, a obra
          “Política tirada das palavras da sagrada escritura”, em que afirma:
        </QuestionText>
        <QuestionSubText>
          “Todo o poder vem de Deus. Os governantes, pois, agem como ministros
          de Deus e seus representantes na terra. Consequentemente, o trono real
          não é o trono de um homem, mas o trono do próprio Deus.” A partir da
          citação acima e de e seus conhecimentos sobre os teóricos do
          absolutismo, assinale a alternativa correta:-
        </QuestionSubText>
      </QuestionContent>

      <AnswerButton>
        <IconPlus name="pluscircleo" />
        <AnswerButtonText>Responder</AnswerButtonText>
      </AnswerButton>
    </Container>
  );
}
