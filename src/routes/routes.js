import { lazy } from "react";

const routes = [
  {
    path: "contact",
    component: lazy(() => import("../main/contact")),
    exact: true,
  },
];

export default routes;
