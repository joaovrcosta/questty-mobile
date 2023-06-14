import { GestureResponderEvent } from 'react-native';
import * as S from './styles';

interface ButtonProps {
  content: string;
  backgroundColor: S.borderVariants;
  onPress?: (event: GestureResponderEvent) => void;
  value?: string;
}

export function Button({ content, backgroundColor, onPress }: ButtonProps) {
  return (
    <S.SignInButton backgroundColor={backgroundColor} onPress={onPress}>
      <S.SignInButtonText>{content}</S.SignInButtonText>
    </S.SignInButton>
  );
}
