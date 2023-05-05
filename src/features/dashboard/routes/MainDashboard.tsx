import styles from "./MainDashboard.module.css";
import Rooms from "../Rooms/Rooms";
import ReservationSummary from "../components/ReservationSummary";
import Performance from "../components/Performance";
import Occupancy from "../components/Occupancy";
import RoomStatus from "../components/RoomStatus";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const MainDashboard = () => {
  return (
    <>
        <main className={styles["main-dashboard"]}>
          <div className={styles["grid-header"]}>
            <DashboardHeader />
          </div>
          <div className={styles["summary"]}>
            <ReservationSummary />
          </div>
          <div className={styles["rooms"]}>
            <Rooms />
          </div>
          <div className={styles["performance"]}>
            <Performance />
          </div>
          <div className={styles["rooms-status"]}>
            <RoomStatus />
          </div>
          <div className={styles["statistics"]}>
            <Occupancy />
          </div>
        </main>
     
    </>
  );
};

export default MainDashboard;
