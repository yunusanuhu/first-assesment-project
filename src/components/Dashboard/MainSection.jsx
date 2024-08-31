import styles from "./mainsection.module.css";
import usericon from "../../images/users.png";
import active from "../../images/active-users.png";
import userloan from "../../images/user-loan.png";
import loansavings from "../../images/loan-savings.png";
import filter from "../../images/filter-results-button.png";
import prevPage from "../../images/prevPage.png";
import nextPage from "../../images/nextPage.png";
import UserComponent from "./UserComponent";
export default function MainSection() {
  const users = [
    {
      id: 1,
      image: usericon,
      name: "USERS",
      number: 2453,
    },
    {
      id: 2,
      image: active,
      name: "ACTIVE USERS",
      number: 2453,
    },
    {
      id: 3,
      image: userloan,
      name: "USERS WITH LOAN",
      number: 12453,
    },
    {
      id: 4,
      image: loansavings,
      name: "USERS WITH SAVINGS",
      number: 102453,
    },
  ];
  const tableData = [
    {
      id: 1,
      organisation: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone: "08078903721",
      date: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: 1,
      organisation: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phone: "08160780928",
      date: "Apr 30, 2020 10:00 AMM",
      status: "Pending",
    },
    {
      id: 1,
      organisation: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      id: 1,
      organisation: "Lendstar",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "Pending",
    },
    {
      id: 1,
      organisation: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "Active",
    },
    {
      id: 1,
      organisation: "Lendstar",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "Active",
    },
    {
      id: 1,
      organisation: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      id: 1,
      organisation: "Lendstar",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: 1,
      organisation: "Lendstar",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "Inactive",
    },
  ];
  return (
    <section className={styles.mainsection}>
      <div className={styles.mainsectionWrapper}>
        <h2 className={styles.userColor}>Users</h2>
        <div className={styles.usersWrapper}>
          <UserComponent users={users} />
        </div>

        <div className={styles.tablesection}>
          <table>
            <tr>
              <th className={styles.tableHead}>
                <span>ORGANISATION</span>
                <img className={styles.tableHeadImg} src={filter} alt="" />
              </th>
              <th className={styles.tableHead}>
                <span>USERNAME</span>
                <img className={styles.tableHeadImg} src={filter} alt="" />
              </th>
              <th className={styles.tableHead}>
                <span>EMAIL</span>
                <img className={styles.tableHeadImg} src={filter} alt="" />
              </th>
              <th className={styles.tableHead}>
                <span>PHONE NUMBER</span>
                <img className={styles.tableHeadImg} src={filter} alt="" />
              </th>
              <th className={styles.tableHead}>
                <span>DATE JOINED</span>
                <img className={styles.tableHeadImg} src={filter} alt="" />
              </th>
              <th className={styles.tableHead}>
                <span>STATUS</span>
                <img className={styles.tableHeadImg} src={filter} alt="" />
              </th>
            </tr>
            {tableData.map((data) => (
              <tr>
                <td className={styles.tableDataData}>{data.organisation}</td>
                <td className={styles.tableDataData}>{data.username}</td>
                <td className={styles.tableDataData}>{data.email}</td>
                <td className={styles.tableDataData}>{data.phone}</td>
                <td className={styles.tableDataData}>{data.date}</td>
                <td className={styles.tableDataData}>{data.status}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className={styles.thumbnail}>
          <div className={styles.left}>
            <form action="">
              <label htmlFor="">Showing </label>
              <select name="" id="">
                <option value="">100</option>
                <option value="">90</option>
                <option value="">80</option>
              </select>
              <label htmlFor=""> out of 100</label>
            </form>
          </div>
          <div className={styles.right}>
            <div class={styles.pagination}>
              <a href="#">
                <img src={prevPage} alt="" />
              </a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">...</a>
              <a href="#">15</a>
              <a href="#">16</a>
              <a href="#">
                <img src={nextPage} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
