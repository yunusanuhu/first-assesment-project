import styles from "./sidebar.module.css";
import style from "./customer.module.css";
import briefcase from "../../images/briefcase.png";
import droparrow from "../../images/droparrow.png";
import home from "../../images/home.png";
import user from "../../images/user-friends.png";
import guarantors from "../../images/guarantors.png";
import loan from "../../images/loan.png";
import handshake from "../../images/handshake.png";
import piggybank from "../../images/piggy-bank.png";
import loanrequest from "../../images/loanrequest.png";
import usercheck from "../../images/user-check.png";
import usertimes from "../../images/user-times.png";
import npbank from "../../images/np-bank.png";
import coins from "../../images/coins-solid.png";
import transaction from "../../images/transaction.png";
import galaxy from "../../images/galaxy.png";
import usercog from "../../images/user-cog.png";
import scroll from "../../images/scroll.png";
import chartbar from "../../images/chart-bar.png";
import sliders from "../../images/sliders.png";
import badge from "../../images/badge-percent.png";
import clipboard from "../../images/clipboard.png";
import Customers from "./Customers";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const customers = [
    {
      id: 2,
      name: "Guarantors",
      image: guarantors,
    },
    {
      id: 3,
      name: "Loans",
      image: loan,
    },
    {
      id: 4,
      name: "Decision Models",
      image: handshake,
    },
    {
      id: 5,
      name: "Savings",
      image: piggybank,
    },
    {
      id: 6,
      name: "Loan Requests",
      image: loanrequest,
    },
    {
      id: 7,
      name: "Whitelist",
      image: usercheck,
    },
    {
      id: 8,
      name: "Karma",
      image: usertimes,
    },
  ];

  const businesses = [
    {
      id: 1,
      name: "Organization",
      image: briefcase,
    },
    {
      id: 2,
      name: "Loan Products",
      image: loanrequest,
    },
    {
      id: 3,
      name: "Saving Products",
      image: npbank,
    },
    {
      id: 4,
      name: "Fees and Charges",
      image: coins,
    },
    {
      id: 5,
      name: "Transactions",
      image: transaction,
    },
    {
      id: 6,
      name: "Services",
      image: galaxy,
    },
    {
      id: 7,
      name: "Service Accouts",
      image: usercog,
    },
    {
      id: 8,
      name: "Settlements",
      image: scroll,
    },
    {
      id: 9,
      name: "Reports",
      image: chartbar,
    },
  ];
  const settings = [
    {
      id: 1,
      name: "Preference",
      image: sliders,
    },
    {
      id: 2,
      name: "Fees and Pricing",
      image: badge,
    },

    {
      id: 3,
      name: "Audit Logs",
      image: clipboard,
    },
  ];
  return (
    <section className={styles.sidebar}>
      <div className={styles.dashboard}>
        <span>
          <img src={briefcase} alt="" />
        </span>
        <span>Switch Organization</span>
        <span>
          <img src={droparrow} alt="" />
        </span>
      </div>
      <div className={styles.dashboard}>
        <span>
          <img src={home} alt="" />
        </span>
        <span>Dashboard</span>
      </div>
      <div className={styles.sidebaritems}>
        <p className={styles.sidebarWrapper}>customers</p>
        <Link to="/users" style={styles.link}>
          <div className={style.customerItem}>
            <img src={user} alt="" />
            <span>Users</span>
          </div>
        </Link>

        <Customers customers={customers} />
        <p className={styles.sidebarWrapper}>businesses</p>
        <Customers customers={businesses} />
        <p className={styles.sidebarWrapper}>settings</p>
        <Customers customers={settings} />
      </div>
    </section>
  );
}
