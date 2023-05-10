import { Card } from "../../../components/Card";
import styles from "./DashboardHeader.module.css";

type DashboardHeaderProps = {
  currentDate: string;
};

const DashboardHeaderComponent = ({ currentDate }: DashboardHeaderProps) => {
  return (
    <Card>
      <div className={styles.container}>
        <button
          className={`${styles["create-booking"]} ${styles["invisible"]}`}
        >
          Create booking
        </button>
        <span className={styles.date}>{currentDate}</span>
        <button className={styles["create-booking"]}>Create booking</button>
      </div>
    </Card>
  );
};

export default DashboardHeaderComponent;
