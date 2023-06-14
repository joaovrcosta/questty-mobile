import React from 'react';
import { View, Text, TextInput } from 'react-native';
import * as S from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function QuestionCreationPage() {
  return (
    <S.Container>
      <S.MakeQuestionContainer>
        <S.FormItemsContainer>
          <Input placeholder="Digite o titulo da sua pergunta" />
          <S.TextArea placeholder="Digite aqui qual é a sua questão" />
        </S.FormItemsContainer>
        <Button backgroundColor="blue_500" content="Faça sua pergunta" />
      </S.MakeQuestionContainer>
    </S.Container>
  );
}
