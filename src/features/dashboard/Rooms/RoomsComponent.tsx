import styles from "./Rooms.module.css";

const RoomsComponent = () => {
  return (
    <section className={styles["rooms-section"]}>
      <h2 className={styles["section-header"]}>Rooms</h2>
      <div className={styles["rooms-details"]}>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress"]}></div>
        </div>
        <div className={styles["rooms-details__stats"]}>
          <p className={styles["rooms-details__label"]}>Total rooms</p>
          <p className={styles["rooms-details__number"]}>163</p>
        </div>
      </div>

      <div className={styles["rooms-details"]}>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress"]}></div>
        </div>
        <div className={styles["rooms-details__stats"]}>
          <p className={styles["rooms-details__label"]}>Total rooms</p>
          <p className={styles["rooms-details__number"]}>163</p>
        </div>
      </div>

      <div className={styles["rooms-details"]}>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress"]}></div>
        </div>
        <div className={styles["rooms-details__stats"]}>
          <p className={styles["rooms-details__label"]}>Total rooms</p>
          <p className={styles["rooms-details__number"]}>163</p>
        </div>
      </div>

      <div className={styles["rooms-details"]}>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress"]}></div>
        </div>
        <div className={styles["rooms-details__stats"]}>
          <p className={styles["rooms-details__label"]}>Total rooms</p>
          <p className={styles["rooms-details__number"]}>163</p>
        </div>
      </div>
    </section>
  );
};

export default RoomsComponent;
