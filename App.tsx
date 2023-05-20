import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { useEffect } from "react";
// import QuesttyLogo from "./src/assets/questty-logo-for-mobile.svg";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import { Input } from "./src/components/Input";
import { Dashboard } from "./src/screens/Feed";

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!hasLoadedFonts) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
