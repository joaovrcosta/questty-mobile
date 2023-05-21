import {
  Container,
  LogoImageContainer,
  LogoImage,
  SignUpForm,
  LabelContainer,
  Label,
  TermsInfoContainer,
  TermsInfo,
} from "./styles";
import logoQuestty from "../../assets/questty-logo-large.png";
import { Input } from "../../components/Input";

export function Register() {
  return (
    <>
      <Container>
        <LogoImageContainer>
          <LogoImage source={logoQuestty} />
        </LogoImageContainer>
        <SignUpForm>
          <LabelContainer>
            <Label>Começe agora mesmo</Label>
          </LabelContainer>
          <Input placeholder="Digite seu e-mail" />
          <TermsInfoContainer>
            <TermsInfo>
              Ao se inscrever no Questty você concorda com os Termos de Serviço
              e Política de Privacidade do Questty .
            </TermsInfo>
          </TermsInfoContainer>
        </SignUpForm>
      </Container>
    </>
  );
}
