import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Layout from "./pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  }
]);

export default router;
