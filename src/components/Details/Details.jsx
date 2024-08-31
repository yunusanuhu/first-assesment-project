import Header from "../Dashboard/Header";
import Sidebar from "../Dashboard/Sidebar";
import DetailsMainSection from "./DetailsMainSection";
import styles from "../Dashboard/dashboard.module.css";
export default function Users() {
  return (
    <div>
      <Header />
      <div className={styles.bodySection}>
        <Sidebar />
        <DetailsMainSection />
      </div>
    </div>
  );
}
