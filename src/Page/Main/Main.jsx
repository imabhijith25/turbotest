import CalD from "../../Components/Calendar/Calendar";
import LineChart from "../../Components/ChartArea/ChartArea";
import Deets from "../../Components/Deets/Deets";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Tables from "../../Components/Table/Table";
import Tags from "../../Components/Tags/Tags";
import styles from "./style.module.css";
const Main = () => {
    const tags = ["31 Keywords", "15 Brands", "5 Retailer"];
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h3>Project: Yogurt Keywords</h3>
                <div>
                    {tags.map((item) => (
                        <Tags value={item} />
                    ))}
                </div>
            </div>

            <div className={styles.dropdown}>
                <CalD />
                <Dropdown
                    label={"Brand: "}
                    items={["Chobani", "Test", "Fine Test"]}
                    onSelected={() => {}}
                ></Dropdown>
                <Dropdown
                    label={"Retailer: "}
                    items={["Chobani", "Test", "Fine Test"]}
                    onSelected={() => {}}
                ></Dropdown>
            </div>

            <Deets />
            <LineChart />
            <Tables />
        </div>
    );
};

export default Main;
