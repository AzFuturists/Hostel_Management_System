import styles from "./MainDashboard.module.css";
import Navigation from "../Navigation/Navigation";

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

      <div>
        <Navigation />
      </div>

      {/* <main>
        <div>Dashboard header</div>
        <div>Header of main area</div>
        <div>Reservation Summary</div>
        <div>Hotel Performance</div>
        <div>Occupancy Statistics</div>
        <div>Rooms</div>
        <div>Room Status</div>
      </main> */}
    </>
  );
};

export default MainDashboard;
