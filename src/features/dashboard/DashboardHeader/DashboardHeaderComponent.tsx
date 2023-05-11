import { Card } from "../../../components/Card";
import styles from "./DashboardHeader.module.css";

type DashboardHeaderProps = {
  currentDate: string;
  handleShowCreateBooking: () => void;
};

const DashboardHeaderComponent = ({
  currentDate,
  handleShowCreateBooking,
}: DashboardHeaderProps) => {
  return (
    <Card>
      <div className={styles.container}>
        <button
          className={`${styles["create-booking"]} ${styles["invisible"]}`}
        >
          Create booking
        </button>
        <span className={styles.date}>{currentDate}</span>
        <button
          className={styles["create-booking"]}
          onClick={handleShowCreateBooking}
        >
          Create booking
        </button>
      </div>
    </Card>
  );
};

export default DashboardHeaderComponent;
