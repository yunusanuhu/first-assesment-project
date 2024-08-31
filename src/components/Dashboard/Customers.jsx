import styles from "./customer.module.css";
export default function Customers({ customers }) {
  return (
    <div className={styles.customerItemContainer}>
      {customers.map((customer) => (
        <div className={styles.customerItem}>
          <img src={customer.image} alt="" />
          <span>{customer.name}</span>
        </div>
      ))}
    </div>
  );
}
