import { useEffect, useState } from "react";
import DropArrow from "../../Icons/Dropdown";
import styles from "./cal.module.css";

const CalD = ({ label, items, onSelected }) => {
    const [selected, setSelected] = useState("");
    const [value, setValue] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src="./images/calendar.svg"></img>
                <p>2023-03-02 to 2023-04-15</p>
            </div>

            {/* <DatePicker value={value} onChange={setValue} />; */}
        </div>
    );
};

export default CalD;
