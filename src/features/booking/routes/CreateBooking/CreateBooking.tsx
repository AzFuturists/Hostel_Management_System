import { closeCreateBookingModal } from "../../../../store/createBookingSlice";
import CreateBookingComponent from "./CreateBookingComponent";
import { useDispatch } from "react-redux";

const CreateBooking = () => {
  const dispatch = useDispatch();

  function handleCloseCreateBookingModal() {
    dispatch(closeCreateBookingModal());
  }

  const args = {
    handleCloseCreateBookingModal,
  };
  return <CreateBookingComponent {...args} />;
};

export default CreateBooking;
