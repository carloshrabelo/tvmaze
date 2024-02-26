import { createBrowserRouter } from "react-router-dom";

import EpisodeDetails from "./pages/episode";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Show from "./pages/show";

const isDevelopment = process.env.NODE_ENV === "development";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: "show/:id",
          Component: Show
        },
        {
          path: "episode/:id",
          Component: EpisodeDetails
        }
      ]
    }
  ],
  isDevelopment
    ? undefined
    : {
        basename: "/tvmaze"
      }
);

export default router;
