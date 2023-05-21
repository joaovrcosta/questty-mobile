import { Input } from "../../components/Input";
import {
  Container,
  LogoImage,
  LoginForm,
  Label,
  LogoImageContainer,
  SignInButton,
  SignInButtonText,
  SignUpButton,
  SignUpButtonText,
  ForgetText,
  ForgetBox,
  LabelContainer,
} from "./styles";
import logoQuestty from "../../assets/questty-logo-large.png";

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
          <SignInButton>
            <SignInButtonText>Entrar</SignInButtonText>
          </SignInButton>
          <SignUpButton>
            <SignUpButtonText>Cadastrar</SignUpButtonText>
          </SignUpButton>
        </LoginForm>
      </Container>
    </>
  );
}
