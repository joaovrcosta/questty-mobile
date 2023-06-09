import * as S from './styles';
import { Text } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import { QuestionCard } from '../../components/QuestionCard';
import { SelectCategory } from '../../components/SelectCategory';

export function Dashboard() {
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
    <>
      <S.Container>
        <SelectCategory name="Matérias"></SelectCategory>

        <S.ReloadContainer>
          <S.ReloadNewQuestions>
            <Text>+ 6 perguntas</Text>
          </S.ReloadNewQuestions>
        </S.ReloadContainer>

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
      </S.Container>
    </>
  );
}
