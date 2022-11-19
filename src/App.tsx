import {DebugProvider} from '../src/providers/DebugProvider';
import {GlobalStyle} from '../src/providers/GlobalStyle';
import MultiThemeProvider from "../src/providers/MultiThemeProvider";
import {DialogProvider} from "../src/providers/DialogProvider";
import I18nProvider from "../src/providers/I18nProvider";
import MainPage from "pages/main";

function App() {
  return (
    <DebugProvider>
      <MultiThemeProvider>
        <GlobalStyle></GlobalStyle>
        <DialogProvider>
          <I18nProvider>
            <MainPage></MainPage>
          </I18nProvider>
        </DialogProvider>
      </MultiThemeProvider>
    </DebugProvider>
  );
}

export default App;
