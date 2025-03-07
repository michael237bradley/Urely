import * as React from "react";
import ReactECharts from "echarts-for-react";
import Title from "../../components/Title";

export default function BarChart() {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "Exercise",
        type: "bar",
        barWidth: "60%",
        data: [20, 56, 175, 354, 390, 330, 220]
      }
    ]
  };

  return (
    <React.Fragment>
      <ReactECharts option={option} />
    </React.Fragment>
  );
}
