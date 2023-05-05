import RoomsComponent from "./RoomsComponent";
import type { RootState } from "../../../store/index";
import { useSelector } from "react-redux";

const Rooms = () => {
  const total = useSelector((state: RootState) => state.rooms.total);
  const filled = useSelector((state: RootState) => state.rooms.filled);

  const args = { total, filled };

  return <RoomsComponent {...args} />;
};

export default Rooms;
