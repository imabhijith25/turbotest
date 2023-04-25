import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styles from "./chart.module.css";
const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],

    datasets: [
        {
            label: "Walmart",
            data: [23, 45, 66, 34, 66, 33, 67],
            borderRadius: "32",
            borderWidth: 2,
            fill: true,
            borderColor: "green",
            backgroundColor: "rgba(74, 108, 153, 0.2)",
            pointRadius: 0,
            tension: 0.3,
        },
        {
            borderWidth: 2,
            label: "Target",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(74, 108, 153, 0.2)",
            borderColor: "#599bff",
            pointRadius: 0,
            tension: 0.3,
        },
    ],
};

const datatwo = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],

    datasets: [
        {
            label: "Walmart",
            data: [23, 45, 66, 34, 66, 33, 67],
            borderWidth: 2,
            fill: false,
            borderColor: "green",
            tension: 0.3,
        },
        {
            label: "Target",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderWidth: 2,
            borderColor: "#599bff",
            tension: 0.3,
        },
    ],
};
const LineChart = () => (
    <>
        <div className={styles.row}>
            <div className={styles.check}>
                <div className="header">
                    <h1 className="title">Share of Search</h1>
                </div>
                <Line data={data} />
            </div>
            <div className={styles.check}>
                <div className="header">
                    <h1 className="title">Average Rank on holder</h1>
                </div>
                <Line data={datatwo} />
            </div>
        </div>
    </>
);

export default LineChart;
