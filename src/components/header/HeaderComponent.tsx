import styles from "./Header.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import user from "../../../public/user.png";

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.search}>
        <span className={styles["search-icon"]}>
          <BiSearchAlt />
        </span>
        <input
          className={styles["search-input"]}
          type="text"
          placeholder="Search rooms, offers"
        />
      </div>
      <div className={styles["user-area"]}>
        <div className={styles.notifications}>
          <IoMdNotificationsOutline className={styles.ring} />
        </div>
        <div className={styles.user}>
          <div className={styles["avatar-container"]}>
            <img className={styles.image} src={user} alt="user avatar" />
          </div>
          <div className={styles["user-details"]}>
            <span className={styles.username}>Lolita</span>
            <span className={styles.occupancy}>Receptionist</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
