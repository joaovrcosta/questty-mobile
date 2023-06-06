import * as S from './styles';
import logoQuestty from '../../assets/questty-logo-large.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register() {
  return (
    <S.Container>
      <S.LogoImageContainer>
        <S.LogoImage source={logoQuestty} />
      </S.LogoImageContainer>
      <S.SignUpForm>
        <S.LabelContainer>
          <S.Label>Começe agora mesmo</S.Label>
        </S.LabelContainer>
        <Input placeholder="Digite seu e-mail" />
        <S.TermsInfoContainer>
          <S.TermsInfo>
            Ao se inscrever no Questty você concorda com os Termos de Serviço e
            Política de Privacidade do Questty .
          </S.TermsInfo>
        </S.TermsInfoContainer>
      </S.SignUpForm>
    </S.Container>
  );
}
