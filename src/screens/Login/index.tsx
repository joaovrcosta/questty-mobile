import { Input } from "../../components/Input";
import {
  Container,
  LogoImage,
  LoginForm,
  Label,
  LogoImageContainer,
} from "./styles";
import logoQuestty from "../../assets/questty-logo.png";

export function Login() {
  return (
    <>
      <Container>
        <LogoImageContainer>
          <LogoImage source={logoQuestty} />
        </LogoImageContainer>
        <LoginForm>
          <Label></Label>
          <Input />
          <Input />
        </LoginForm>
      </Container>
    </>
  );
}
