import styles from "./detailsmainsection.module.css";
import backarrow from "../../images/np_back.png";
import passport from "../../images/passport.png";
import filledstar from "../../images/filledstar.png";
import emptystar from "../../images/emptystar.png";
export default function DetailsMainSection() {
  return (
    <section className={styles.mainsection}>
      <div className={styles.mainsectionWrapper}>
        <div className={styles.backarrow}>
          <img src={backarrow} alt="" />
          <span>
            <a>Back to Users</a>
          </span>
        </div>
        <div className={styles.userdetails}>
          <span>Users Details</span>
          <div className={styles.btncontainer}>
            <button className={styles.userbtn1}>BLACKLIST USER</button>
            <button className={styles.userbtn2}>ACTIVATE USER</button>
          </div>
        </div>
        <div className={styles.generaldetails}>
          <div className={styles.upper}>
            <div className={styles.passportholder}>
              <img src={passport} alt="" />
              <div className={styles.passporttext}>
                <p>Grace Effiom</p>
                <span>LSQFf587g90</span>
              </div>
            </div>

            <div className={styles.verticalline}></div>
            <div className={styles.passporttext}>
              <p className={styles.passporttextp}>User's Tier</p>
              <div>
                <img src={filledstar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
              </div>
            </div>
            <div className={styles.verticalline}></div>
            <div className={styles.passporttext}>
              <p className={styles.passporttextp2}>N200,000</p>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className={styles.lower}>
            <span>General Details</span>
            <span>Documents</span>
            <span>Bank Details</span>
            <span>Loans</span>
            <span>Savings</span>
            <span>App and System</span>
          </div>
        </div>
        <div className={styles.detailsHeroSection}>
          <div className={styles.detailsInfo}>
            <div className={styles.infoHeader}>
              <h3>Personal Information</h3>
            </div>
            <div className={styles.infoBody1}>
              <div>
                <p>Full Name</p>
                <p>Grace Effiom</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>07060780922</p>
              </div>
              <div>
                <p>Email Address</p>
                <p>grace@gmail.com</p>
              </div>
              <div>
                <p>BVN</p>
                <p>07060780922</p>
              </div>
              <div>
                <p>Gender</p>
                <p>Female</p>
              </div>
            </div>
            <div className={styles.infoBody2}>
              <div>
                <p>Marital Status</p>
                <p>Single</p>
              </div>
              <div>
                <p>Children</p>
                <p>None</p>
              </div>
              <div>
                <p>Type of Residence</p>
                <p>Parent’s Apartment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
