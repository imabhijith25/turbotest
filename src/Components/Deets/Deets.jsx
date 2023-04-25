import styles from "./Deets.module.css";
const Deets = () => {
    const values = [
        {
            head: "Share of Search",
            measure: [0, 3.4],
            count: "1.6%",
            msg: "From Last week across all retailers",
        },
        {
            head: "Average Position",
            count: "06",
            measure: [1, "04"],
            msg: "From Last week across all retailers",
        },
        {
            head: "Sponsored Products",
            count: "10",
            measure: null,
            msg: "Total from all retailers",
        },

        {
            head: "Keywords",
            count: "32",
            measure: null,
            msg: "Total",
        },
        {
            head: "Brands",
            count: "15",
            measure: null,
            msg: "From last week",
        },
        {
            head: "Retailers",
            count: "05",
            measure: null,
            msg: "From last week",
        },
    ];
    return (
        <div className={styles.row}>
            {values.map((item, index) => (
                <div className={styles.card}>
                    <h5>{item.head}</h5>
                    <h2>{item.count}</h2>
                    <div className={styles.info}>
                        {item.measure && (
                            <>
                                {item.measure[0] == 0 && (
                                    <div className={styles.down}>
                                        <img src="./images/arrow-down.svg" />
                                        {item.measure[1]}
                                    </div>
                                )}
                                {item.measure[0] == 1 && (
                                    <div className={styles.up}>
                                        <img src="./images/arrow-up.svg" />
                                        {item.measure[1]}
                                    </div>
                                )}
                            </>
                        )}

                        <p>{item.msg}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Deets;
