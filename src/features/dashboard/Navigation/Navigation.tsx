import styles from "./Navigation.module.css";
import { RxDashboard } from "react-icons/rx";
import {
  FaBed,
  FaRegFileAlt,
  FaRegBuilding,
  FaDollarSign,
} from "react-icons/fa";
import { MdOutlineBedroomParent, MdOutlineLocalOffer } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className={styles["nav-left"]}>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-list__item"]}>
          <RxDashboard /> Dashboard
        </li>
        <li className={styles["nav-list__item"]}>
          <FaBed />
          Reservation
        </li>
        <li className={styles["nav-list__item"]}>
          <FaRegFileAlt />
          Report
        </li>
        <li className={styles["nav-list__item"]}>
          <MdOutlineBedroomParent /> Rooms
        </li>
        <li className={styles["nav-list__item"]}>
          {" "}
          <FaRegBuilding /> Hotels
        </li>
        <li className={styles["nav-list__item"]}>
          <MdOutlineLocalOffer /> Deals
        </li>
        <li className={styles["nav-list__item"]}>
          <FaDollarSign /> Rate
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
