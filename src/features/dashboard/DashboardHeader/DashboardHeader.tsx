import DashboardHeaderComponent from "./DashboardHeaderComponent";
import { useDispatch } from "react-redux";
import { setShowCreateBookingModal } from "../../../store/createBookingSlice";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const currentDate = new Date().toDateString();

  function handleShowCreateBooking() {
    dispatch(setShowCreateBookingModal());
  }

  const args = { currentDate, handleShowCreateBooking };

  return <DashboardHeaderComponent {...args} />;
};

export default DashboardHeader;
