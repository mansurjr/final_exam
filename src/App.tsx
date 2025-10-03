import { memo } from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Statistic from "./pages/statistic";
import Students from "./pages/students";
import CreateStudent from "./pages/create-student";
import Bookmark from "./pages/bookmark";
import Male from "./pages/students/male";
import Female from "./pages/students/female";
import All from "./pages/students/all";

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { index: true, element: <Statistic /> },
        {
          path: "/students",
          element: <Students />,
          children: [
            { index: true, element: <All /> },
            { path: "male", element: <Male /> },
            { path: "female", element: <Female /> },
          ],
        },
        { path: "create-student", element: <CreateStudent /> },
        { path: "bookmark", element: <Bookmark /> },
      ],
    },
  ]);
};

export default memo(App);
