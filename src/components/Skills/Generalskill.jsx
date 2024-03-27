import React from 'react'
import styles from "./Skills.module.css";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar} from "react-chartjs-2";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
function Generalskill() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
    <div className={styles.barchart}>
        
           <Bar
              data={{
                labels: [
                  "Html",
                  "Css",
                  "Js",
                  "C/C++",
                  "DS/Algorithim",
                  "Java",
                  "Python",
                ],
                datasets: [
                  {
                    label: "%",
                    data: [75, 83, 72, 87, 88, 90, 67, 75, 100],
                    backgroundColor: ["#76D7C4"],
                  },
                ],
              }}
              options={{
                indexAxis: "y",
                barPercentage: 0.4,
                borderRadius: 5,
                
                scales: {
                  x: {
                    grid: {
                      display: false, // Set to true to display x-axis grid lines
                      color: "rgba(255, 255, 255, 0.2)", // Change x-axis grid line color
                    },
                    ticks: {
                      color: " white", // Change x-axis label color
                      font: {
                        size: 11, // Change x-axis label font size
                      },
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      color: "rgba(255, 255, 255, 0.2)", // Change y-axis grid line color
                    },
                    ticks: {
                      color: "white", // Change y-axis label color
                      font: {
                        size: isSmallScreen ?10 :12, // Change y-axis label font size
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

export default Generalskill
