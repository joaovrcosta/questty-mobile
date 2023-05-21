import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { useEffect } from "react";
// import QuesttyLogo from "./src/assets/questty-logo-for-mobile.svg";

import { Dashboard } from "./src/screens/Feed";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { HeaderComponent } from "./src/components/Header";
import { QuestionPage } from "./src/screens/QuestionPage";

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      <QuestionPage />
    </ThemeProvider>
  );
}
