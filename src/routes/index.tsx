import { createBrowserRouter } from "react-router-dom";
import MainDashboard from "../features/dashboard/routes/MainDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
  },
]);

export default router;
