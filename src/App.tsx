import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MaterialThemeProvider } from "./lib/mui";
import ReduxProvider from "./lib/redux";

function App() {
  return (
    <ReduxProvider>
      <MaterialThemeProvider>
        <h1>WIP</h1>
      </MaterialThemeProvider>
    </ReduxProvider>
  );
}

export default App;