import styles from "./Tags.module.css";
const Tags = ({ value }) => {
    return <span className={styles.tags}>{value}</span>;
};

export default Tags;
