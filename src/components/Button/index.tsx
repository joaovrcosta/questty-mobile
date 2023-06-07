import { GestureResponderEvent } from 'react-native';
import * as S from './styles';

interface ButtonProps {
  content: string;
  backgroundColor: S.borderVariants;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Button({ content, backgroundColor }: ButtonProps) {
  return (
    <S.SignInButton backgroundColor={backgroundColor}>
      <S.SignInButtonText>{content}</S.SignInButtonText>
    </S.SignInButton>
  );
}
