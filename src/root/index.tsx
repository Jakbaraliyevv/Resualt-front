import { createBrowserRouter } from "react-router-dom";
import LayoutComponents from "../layout";
import Afisha from "../pages/afisha";
import Seans from "../pages/seans";
import Teater from "../pages/teater";
import Kino from "../pages/kino";
import Contact from "../pages/contact";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponents />,
    children: [
      {
        index: true,
        element: <Afisha />,
      },
      {
        path: "/seans",
        element: <Seans />,
      },
      {
        path: "/teater",
        element: <Teater />,
      },
      {
        path: "/kino",
        element: <Kino />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
