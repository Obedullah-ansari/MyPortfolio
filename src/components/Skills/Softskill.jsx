import React from "react";
import styles from "./Skills.module.css";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function Softskill() {
  return (
    <>
      <div className={styles.pichart}>
        <Doughnut
          data={{
            labels: [
              "Communication Skills",
              "Teamwork",
              "Problem-Solving",
              "Leadership",
            ],

            datasets: [
              {
                data: [45, 75, 55, 68],
                backgroundColor: ["#82E0AA ", "#A2D9CE", "#F5CBA7", "#5DADE2 "],
                borderWidth: 0,
                borderColor: "black",
                hoverBackgroundColor: "cyan",
                cutout: "40%",
                radius: "70%",
                hoverBorderJoinStyle: "miter",
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "#EAF2F8 ", // Change label color
                  font: {
                    size: 12, // Change label font size
                    weight: "bold", // Change label font weight
                  },
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default Softskill;
