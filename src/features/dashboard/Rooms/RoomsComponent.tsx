import styles from "./Rooms.module.css";
import { Card } from "../../../components/Card";

type RoomsProps = {
  total: number;
  filled: number;
};

const RoomsComponent = ({ total, filled }: RoomsProps) => {
  return (
    <Card style={{height: '100%', width: '100%'}}>
      <h2 className={styles["section-header"]}>Rooms</h2>
      <div className={styles["rooms-details"]}>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress"]}></div>
        </div>
        <div className={styles["rooms-details__stats"]}>
          <div className={styles["rooms-details__container"]}>
            <p className={styles["rooms-details__label"]}>Total rooms</p>
            <p className={styles["rooms-details__number"]}>{total}</p>
          </div>
          <div className={styles["rooms-details__container"]}>
            <p className={styles["rooms-details__label"]}>Filled rooms</p>
            <p className={styles["rooms-details__number"]}>{filled}</p>
          </div>
        </div>
      </div>

      <div className={styles["rooms-details"]}>
        <h3 className={styles["rooms-details__header"]}>Single</h3>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress"]}></div>
        </div>
        <div className={styles["rooms-details__stats"]}>
          <div className={styles["rooms-details__container"]}>
            <p className={styles["rooms-details__label"]}>Total rooms</p>
            <p className={styles["rooms-details__number"]}>40</p>
          </div>
          <div className={styles["rooms-details__container"]}>
            <p className={styles["rooms-details__label"]}>Filled rooms</p>
            <p className={styles["rooms-details__number"]}>23</p>
          </div>
        </div>
      </div>

      <div className={styles["rooms-details"]}>
        <h3 className={styles["rooms-details__header"]}>Double</h3>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress"]}></div>
        </div>
        <div className={styles["rooms-details__stats"]}>
          <div className={styles["rooms-details__container"]}>
            <p className={styles["rooms-details__label"]}>Total rooms</p>
            <p className={styles["rooms-details__number"]}>60</p>
          </div>
          <div className={styles["rooms-details__container"]}>
            <p className={styles["rooms-details__label"]}>Filled rooms</p>
            <p className={styles["rooms-details__number"]}>50</p>
          </div>
        </div>
      </div>

      <div className={styles["rooms-details"]}>
        <h3 className={styles["rooms-details__header"]}>Triple</h3>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress"]}></div>
        </div>
        <div className={styles["rooms-details__stats"]}>
          <div className={styles["rooms-details__container"]}>
            <p className={styles["rooms-details__label"]}>Total rooms</p>
            <p className={styles["rooms-details__number"]}>50</p>
          </div>
          <div className={styles["rooms-details__container"]}>
            <p className={styles["rooms-details__label"]}>Total rooms</p>
            <p className={styles["rooms-details__number"]}>43</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RoomsComponent;
