import { lazy } from "react";

const routes = [
  {
    path: "home",
    component: lazy(() => import("../components/Homepage")),
    exact: true,
  },
];

export default routes;
