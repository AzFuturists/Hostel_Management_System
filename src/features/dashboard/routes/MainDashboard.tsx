import styles from "./MainDashboard.module.css";
import Navigation from "../Navigation/Navigation";
import Rooms from "../Rooms/Rooms";

const MainDashboard = () => {
  return (
    <>
      <header className={styles.header}>
        <div>Logo</div>
        <div>
          <input type="text" placeholder="Search rooms, offers" />
        </div>
        <div>
          <div>Notification Bell</div>
          <div>User</div>
        </div>
      </header>

      <section className={styles["main-section"]}>
        <Navigation />

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
      </section>
    </>
  );
};

export default MainDashboard;
