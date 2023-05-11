import "./CreateBooking.module.css";
import Input from "../../../../components/Input";
import { Card, CardHeader, CardTitle } from "../../../../components/Card";
import Button from "../../../../components/Button";
import styles from "./CreateBooking.module.css";
import { MdClose } from "react-icons/md";

type CreateBookingComponentProps = {
  handleCloseCreateBookingModal: () => void;
};

const CreateBookingComponent = ({
  handleCloseCreateBookingModal,
}: CreateBookingComponentProps) => {
  return (
    <Card className={styles.module}>
      <CardHeader className={styles.mb}>
        <button
          className={styles.close}
          onClick={handleCloseCreateBookingModal}
        >
          <MdClose />
        </button>
        <CardTitle className={styles["module-header"]}>
          Create Booking
        </CardTitle>
      </CardHeader>
      <form action="" className={styles.form}>
        <div className={`${styles["form-control"]} mb-2`}>
          <label className={styles["form-label"]}>Name</label>
          <Input type="text" />
        </div>
        <div className={`${styles["form-control"]} mb-2`}>
          <label className={styles["form-label"]}>Surname</label>
          <Input type="text" />
        </div>
        <div className={`${styles["form-control"]} mb-2`}>
          <label className={styles["form-label"]}>Email</label>
          <Input type="email" />
        </div>
        <div className={`${styles["form-control"]} mb-2`}>
          <label className={styles["form-label"]}>Phone Number</label>
          <Input type="number" />
        </div>
        <div className={`${styles["form-control"]} mb-2`}>
          <label className={styles["form-label"]}>Room Number</label>
          <Input type="number" />
        </div>
        <Button type="submit" className={styles.add}>
          Create
        </Button>
      </form>
    </Card>
  );
};

export default CreateBookingComponent;
