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

export function Login() {
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
          <Input placeholder="Digite seu e-mail" />
          <Input placeholder="Digite aqui sua senha" />
          <ForgetBox>
            <ForgetText>Esqueci a minha senha</ForgetText>
          </ForgetBox>
          <Button content="Cadastrar" backgroundColor="blue_500" />
          <Button content="Entrar" backgroundColor="yellow_500" />
        </LoginForm>
      </Container>
    </>
  );
}
