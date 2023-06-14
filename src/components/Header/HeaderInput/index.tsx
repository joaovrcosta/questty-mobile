import { Container } from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps;

export function HeaderInput({ ...rest }: Props) {
  return <Container {...rest} />;
}
