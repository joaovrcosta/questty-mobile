import { Input } from '../../components/Input';
import {
  Container,
  LogoImage,
  LoginForm,
  Label,
  LogoImageContainer,
  ForgetText,
  ForgetBox,
  LabelContainer,
} from './styles';
import logoQuestty from '../../assets/questty-logo-large.png';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const Navigation = useNavigation<any>();

  const handleRegisterPress = () => {
    Navigation.navigate('Register');
  };

  const handleLoginPress = () => {
    if (email && password) {
      Navigation.navigate('Dashboard');
    } else {
    }
  };

  return (
    <>
      <Container>
        <LogoImageContainer>
          <LogoImage source={logoQuestty} />
        </LogoImageContainer>
        <LoginForm>
          <LabelContainer>
            <Label>Entrar com a sua conta</Label>
          </LabelContainer>
          <Input
            placeholder="Digite seu e-mail"
            onChangeText={handleEmailChange}
          />
          <Input
            placeholder="Digite aqui sua senha"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
          />
          <ForgetBox>
            <ForgetText>Esqueci a minha senha</ForgetText>
          </ForgetBox>

          <Button
            content="Cadastrar"
            backgroundColor="blue_500"
            value={email}
            onPress={handleRegisterPress}
          />
          <Button
            content="Entrar"
            backgroundColor="yellow_500"
            onPress={handleLoginPress}
            value={password}
          />
        </LoginForm>
      </Container>
    </>
  );
}
