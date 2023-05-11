import styles from "../Layout/Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal";
import CreateBooking from "../../features/booking/routes/CreateBooking/CreateBooking";

type LayoutComponentProps = {
  children: React.ReactNode;
  showCreateBooking: boolean;
};

const LayoutComponent = ({
  children,
  showCreateBooking,
}: LayoutComponentProps) => {
  return (
    <>
      {showCreateBooking && (
        <Modal>
          <CreateBooking />
        </Modal>
      )}
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
        {children}
      </section>
    </>
  );
};

export default LayoutComponent;
