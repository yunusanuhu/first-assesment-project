import styles from "./header.module.css";
import logo from "../../logo.png";
import notification from "../../images/notification.png";
import avatar from "../../images/avatar.png";
import dropdown from "../../images/dropdown.png";
export default function Header() {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="" />
          <form action="">
            <input type="text" placeholder="Search for everything" />
          </form>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <a href="#">Doc</a>
            </li>
            <li>
              <img src={notification} alt="" />
            </li>
            <li>
              <img src={avatar} alt="" />
            </li>
            <li>
              <span>Adedeji</span>
            </li>
            <li>
              <img src={dropdown} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
