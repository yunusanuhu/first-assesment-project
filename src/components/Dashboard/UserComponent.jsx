import styles from "./mainsection.module.css";
export default function UserComponent({ users }) {
  return (
    <>
      {users.map((user) => (
        <div className={styles.users}>
          <span>
            <img src={user.image} alt="" />
          </span>
          <span className={styles.nameStyle}>{user.name}</span>
          <span className={styles.numberStyle}>
            {user.number.toLocaleString()}
          </span>
        </div>
      ))}
    </>
  );
}
