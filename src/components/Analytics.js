import React from "react";
import "./Analytics.css";
import { Bar, Line } from "react-chartjs-2";

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataBar: {
        labels: ["Song1", "Song2", "Song3"],
        datasets: [
          {
            label: "Likes",
            data: [11, 22, 33],
            backgroundColor: [
              "rgba(255 ,99 ,132,0.6)",
              "rgba(255 ,99 ,132,0.6)",
              "rgba(255 ,99 ,132,0.6)",
            ],
          },
          {
            label: "Number of play",
            data: [100, 122, 133],
            backgroundColor: [
              "rgba(54 ,162 ,235,0.6)",
              "rgba(54 ,162 ,235,0.6)",
              "rgba(54 ,162 ,235,0.6)",
            ],
          },
        ],
      },
      chartDataLine: {
        labels: ["Max", "Jack", "Martin"],
        datasets: [
          {
            label: "Number of Login",
            data: [11, 0, 33],
            backgroundColor: ["rgba(54 ,162 ,235,0.6)"],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div>
        <div className="analytics-content-div">
          <div className="part1-div">
            <Bar
              data={this.state.chartDataBar}
              width={200}
              options={
                {
                  // maintainAspectRatio: false,
                }
              }
            />
          </div>
          <div className="part2-div">
            <Line
              data={this.state.chartDataLine}
              width={200}
              options={
                {
                  // maintainAspectRatio: false,
                }
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Analytics;
