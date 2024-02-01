import { createBrowserRouter } from "react-router-dom";
import ShowContainer from "../components/ShowContainer";
import ShowDetails from "../components/ShowDetails";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ShowContainer />,
      },
      {
        path: "details/:id",
        element: <ShowDetails />
      },
    ]
  },
 
]);

export default router;
