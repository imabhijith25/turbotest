import { useEffect, useState } from "react";
import DropArrow from "../../Icons/Dropdown";
import styles from "./Dropdown.module.css";

const Dropdown = ({ label, items, onSelected }) => {
    const [selected, setSelected] = useState("");

    const [open, setOpen] = useState(false);

    const calculateHeightoFDropdown = () => {
        return String(items?.length * 40);
    };
    useEffect(() => {
        if (selected != "Select") {
            onSelected(selected);
        }
    }, [selected]);
    return (
        <div className={styles.container}>
            <div
                className={styles.selector}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <div style={{ color: "black" }}>
                    <label>{label} </label> {selected}
                </div>
                <div
                    className={
                        open
                            ? styles.dropArrow + " " + styles.down
                            : styles.dropArrow + " " + styles.up
                    }
                >
                    <DropArrow />
                </div>
            </div>
            <div
                style={
                    open
                        ? {
                              height: calculateHeightoFDropdown() + "px",
                              visibility: "visible",
                          }
                        : { height: "0px", visibility: "hidden" }
                }
                className={styles.dropdown}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={styles.item}
                        onClick={() => {
                            setSelected(item);
                            setOpen(false);
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
