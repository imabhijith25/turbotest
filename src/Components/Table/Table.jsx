import DataTable from "react-data-table-component";
import styles from "./table.module.css";

const tableCustomStyles = {
    headRow: {
        style: {
            backgroundColor: "#e7eef0",
            fontWeight: 600,
        },
    },
};
const columns = [
    {
        name: (
            <p style={{ display: "flex", alignItems: "center" }}>
                Keyword <img src="./images/search.svg" />
            </p>
        ),
        selector: (row) => row.keyword,
    },
    {
        name: "Walmart",
        selector: (row) => row.walmart,
        sortable: true,
    },
    {
        name: "Amazon",
        selector: (row) => row.amazon,
        sortable: true,
    },

    {
        name: "Target",
        selector: (row) => row.target,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        keyword: "Yogurt",
        walmart: "21",
        amazon: "21",
        target: "21",
    },
    {
        id: 2,
        keyword: "Chocolate Yogurt",
        walmart: "12",
        amazon: "34",
        target: "11",
    },
    {
        id: 3,
        keyword: "Yogurt Drink",
        walmart: "12",
        amazon: "34",
        target: "11",
    },
    {
        id: 4,
        keyword: "Yogurt Plain",
        walmart: "12",
        amazon: "34",
        target: "11",
    },
];

const Tables = () => {
    return (
        <>
            <div className={styles.table}>
                <h1>Product Found on each retailer</h1>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={tableCustomStyles}
                />
                ;
            </div>
        </>
    );
};

export default Tables;
