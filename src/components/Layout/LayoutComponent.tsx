import styles from "../Layout/Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal";
import CreateBooking from "../../features/booking/routes/CreateBooking/CreateBooking";
import Header from "../header/Header";

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
      <Header />
      <section className={styles["main-section"]}>
        <Navigation />
        {children}
      </section>
    </>
  );
};

export default LayoutComponent;
