import { RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { MaterialThemeProvider } from "./lib/mui";
import ReduxProvider from "./lib/redux";
import router from "./routes";

function App() {
  return (
    <ReduxProvider>
      <MaterialThemeProvider>
        <RouterProvider router={router} />
      </MaterialThemeProvider>
    </ReduxProvider>
  );
}
export default App;
