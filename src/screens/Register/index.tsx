import * as S from './styles';
import logoQuestty from '../../assets/questty-logo-large.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Register() {
  const Navigation = useNavigation<any>();

  const handleCreatePress = () => {
    Navigation.navigate('Dashboard');
  };

  const handleLoginPress = () => {
    Navigation.navigate('Login');
  };

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
        <Button
          content="Cadastrar"
          backgroundColor="blue_500"
          onPress={handleCreatePress}
        />
        <Button
          content="Entrar"
          backgroundColor="yellow_500"
          onPress={handleLoginPress}
        />
      </S.SignUpForm>
    </S.Container>
  );
}
