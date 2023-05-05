import styles from '../Layout/Layout.module.css';
import Navigation from '../Navigation/Navigation';

const LayoutComponent = (props: any) => {
    return <>
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
              {props.children}
        </section> 
  </>
}

export default LayoutComponent;