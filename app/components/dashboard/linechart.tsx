"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { generateFakeChartData } from "@/lib/helperFunctions";

export default function LineChart() {
  const { months, values } = generateFakeChartData();

  // Find "now" marker and peak marker
  const nowIndex = 1;
  const maxIndex = values.indexOf(Math.max(...values));

  const options = {
    grid: {
      left: "8%",
      right: "3%",
      top: "10%",
      bottom: "12%",
    },
    xAxis: {
      type: "category",
      data: months,
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "#aaa" } },
      axisLabel: {
        color: "#AAA",
        fontSize: 14,
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      axisLine: { show: false },
      axisTick: { show: false },
      splitNumber: 5,
      axisLabel: {
        formatter: (value: number) => `$${value / 1000}K`,
        color: "#AAA",
        fontSize: 14,
      },
    },
    series: [
      {
        data: values,
        type: "line",
        smooth: false,
        lineStyle: {
          color: "#B3E237",
          width: 2,
        },
        symbolSize: (value: number, params: any) => {
          // Highlight "now" and peak
          return params.dataIndex === nowIndex || params.dataIndex === maxIndex
            ? 9
            : 0;
        },
        itemStyle: {
          color: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
        },
        markLine: {
          silent: true,
          symbol: "none",
          lineStyle: {
            type: "dashed",
            color: "#AAA",
            width: 2,
          },
          label: {
            show: true,
            position: "end",
            color: "#AAA",
            formatter: "now",
            fontSize: 14,
          },
          data: [{ xAxis: nowIndex }],
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div>
      <ReactECharts option={options} />
    </div>
  );
}
