import styles from "./MainDashboard.module.css";
import Rooms from "../Rooms/Rooms";

const MainDashboard = () => {
  return (
    <>
        <main className={styles["main-dashboard"]}>
          <div className={styles["grid-header"]}>Dashboard header</div>
          <div className={styles["summary"]}>Reservation Summary</div>
          <div className={styles["rooms"]}>
            <Rooms />
          </div>
          <div className={styles["performance"]}>Hotel Performance</div>
          <div className={styles["rooms-status"]}>Room Status</div>
          <div className={styles["statistics"]}>Occupancy Statistics</div>
        </main>
     
    </>
  );
};

export default MainDashboard;
