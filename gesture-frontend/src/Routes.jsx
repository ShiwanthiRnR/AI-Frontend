import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopOne from "pages/DesktopOne";
import DesktopTwo from "pages/DesktopTwo";
import DesktopThree from "pages/DesktopThree";
import DesktopFour from "pages/DesktopFour";

const ProjectRoutes = () => {
  let element = useRoutes([
     { path: "/Home", element: <Home /> },
    // { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <DesktopOne />,
    },
    {
      path: "/desktoptwo",
      element: <DesktopTwo />,
    },
    {
      path: "/desktopthree",
      element: <DesktopThree />,
    },
    {
      path: "/desktopfour",
      element: <DesktopFour />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
