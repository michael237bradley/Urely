import * as React from "react";
import Title from "../../components/Title";
import ReactECharts from "echarts-for-react";

export default function PieChart() {
  const option = {
    tooltip: {
      trigger: "item"
    },
    legend: {
      top: "5%",
      left: "center"
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2
        },
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 60, name: "Completed" },
          { value: 40, name: "Remaining" }
        ]
      }
    ]
  };
  return (
    <React.Fragment>
      <Title>Activity summary </Title>
      <ReactECharts option={option} />
    </React.Fragment>
  );
}
