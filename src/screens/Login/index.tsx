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
//import { Button } from '../../components/Button';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export function Login() {
  const navigation = useNavigation<any>();

  const handleRegisterPress = () => {
    console.log("Navigation funciona, não esqueça de me apagar por favor")
    navigation.navigate('Register');
  }

  // <Button content="Cadastrar" backgroundColor="blue_500" onPress={handleRegisterPress} />
 // <Button content="Entrar" backgroundColor="yellow_500" />
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
        <Button title='test' onPress={handleRegisterPress}/>
         
        </LoginForm>
      </Container>
    </>
  );
}
