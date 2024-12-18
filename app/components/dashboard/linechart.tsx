"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { generateFakeChartData } from "@/lib/helperFunctions";
import { BsQuestionCircle } from "react-icons/bs";
import { IoArrowUpCircleOutline } from "react-icons/io5";

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
      backgroundColor: "rgba(36, 36, 36, 0.8)",
      borderColor: "#AAA",
      textStyle: {
        color: "#AAA",
        fontSize: 14,
      },
      formatter: (params: any) => {
        const data = params[0];
        const value = data.value.toLocaleString();
        const percentage = "4.6% above target";
        return `
          <div class="p-1">
            <div class="text-xs flex items-center justify-between mb-2">
                <div class="text-lg font-bold text-gray-100">$${value}k</div>
                <div class="rounded-full items-center px-1 border border-dashboardGraphText ">?</div>
            </div>
            <div class="text-xs flex items-center">
                <div class="text-lime-500 rounded-full px-0.5 border border-lime-500 bg-lime-900">⬆</div>
                <span class="ml-1">${percentage}</span>
            </div>
        </div>
        `;
      },
    },
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <div className="flex px-2 py-1 bg-dashboardButtonBg border border-dashboardButtonBorder rounded-md">
          <select className="px-2 bg-dashboardButtonBg outline-none">
            <option>Unsatisfied Demand %</option>
          </select>
        </div>
      </div>
      <ReactECharts option={options} />
    </div>
  );
}

// ↑
