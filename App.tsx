import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
// import QuesttyLogo from "./src/assets/questty-logo-for-mobile.svg";
import { Dashboard } from './src/screens/Feed';
//Navigation 
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/components/Navigation/Navigation'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { HeaderComponent } from './src/components/Header';

import { Profile } from './src/screens/Profile';

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const isRegisterPage = false; // Defina aqui a lógica para verificar se a página Register está sendo exibida

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      {!isRegisterPage && <HeaderComponent />}
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <Profile />
    </ThemeProvider>
  );
}
