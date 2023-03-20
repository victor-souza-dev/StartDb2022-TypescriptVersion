import { Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { Main } from "./components/ContentMain/ContentMain";
import { SwitchThemeProvider } from "./contexts/SwitchTheme/SwitchThemeProvider";
import { GlobalLoadingProvider } from "./contexts/GlobalLoading/GlobalLoadingProvider";

function App() {
  return (
    <SwitchThemeProvider>
      <GlobalLoadingProvider>
        <Container maxWidth={"xl"} sx={{ padding: "0 !important" }}>
          <Header></Header>
          <Main></Main>
        </Container>
      </GlobalLoadingProvider>
    </SwitchThemeProvider>
  );
}

export default App;
