import { createBrowserRouter } from "react-router-dom";
import MainDashboard from "../features/dashboard/routes/MainDashboard";
import CreateBooking from "../features/booking/routes/CreateBooking/CreateBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
  },
  {
    path: "/createbooking",
    element: <CreateBooking />
  }
]);

export default router;
