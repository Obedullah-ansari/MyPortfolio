import React from 'react'
import styles from "./Skills.module.css";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Mern() {
  return (
  <>
  <div className={styles.barchart}>
            <Bar
              data={{
                labels: ["react", "mongoDB", "expressJs", " nodejs"],

                datasets: [
                  {
                    label: "MERN-STACK%",
                    data: [82, 75, 85, 78, 100],
                    backgroundColor: [
                      "#5DADE2",
                      "#82E0AA ",
                      "#AF7AC5",
                      "#F4D03F",
                    ],
                  },
                ],
              }}
              options={{
                barPercentage: 0.4,
                borderRadius: 5,
                scales: {
                  x: {
                    grid:{
                      display: false,
                    },
                    ticks: {
                      color: "#F8F9F9", // Change x-axis label color
                      font: {
                        size: 11, // Change x-axis label font size
                        weight: "bold",
                      },
                    },
                  },
                  y: {
                    grid:{
                      display: false,
                    
                    },
                    ticks: {
                      color: "#F8F9F9", // Change y-axis label color
                      font: {
                        size: 12, // Change y-axis label font size
                        weight: "bold", // Change y-axis label font weight
                      },
                    },
                  },
                },
              }}
            />
          </div>
  </>
  )
}

export default Mern
