import LayoutComponent from "./LayoutComponent";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/index";

const Layout = (props: any) => {
  const showCreateBooking = useSelector(
    (state: RootState) => state.createBooking.showCreateBookingModal
  );

  const args = {
    showCreateBooking,
  };
  return <LayoutComponent {...args}>{props.children}</LayoutComponent>;
};

export default Layout;
