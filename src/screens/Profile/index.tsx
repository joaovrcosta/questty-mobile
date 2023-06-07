import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Avatar } from '../../components/Avatar';
import { QuestionCard } from '../../components/QuestionCard';
import * as S from './styles';
import { Text } from 'react-native';

export function Profile() {
  const data = [
    {
      category: 'biologia',
      username: 'joaovrcosta',
      content: 'Uma pergunta simples ok',
      date: '20/05/2023',
    },
    {
      category: 'biologia',
      username: 'joaovrcosta',
      content: 'Uma pergunta simples ok',
      date: '20/05/2023',
    },
    {
      category: 'biologia',
      username: 'joaovrcosta',
      content: 'Uma pergunta simples ok',
      date: '20/05/2023',
    },
    {
      category: 'biologia',
      username: 'joaovrcosta',
      content: 'Uma pergunta simples ok',
      date: '20/05/2023',
    },
  ];

  return (
    <S.ProfileContainer>
      <Avatar />
      <S.Username>joaovrcosta</S.Username>
      <S.LoginDate>Entrou em 10 de fevereiro de 2021</S.LoginDate>
      <S.QuestionsContainer>
        <S.Title>Ultimas respostas:</S.Title>
        <S.Questions>
          <S.QuestionsList
            data={data}
            renderItem={({ item }) => <QuestionCard data={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: getBottomSpace(),
            }}
          />
        </S.Questions>
      </S.QuestionsContainer>
    </S.ProfileContainer>
  );
}
