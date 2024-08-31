import Header from "./Header";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import styles from "./dashboard.module.css";
export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className={styles.bodySection}>
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
}
