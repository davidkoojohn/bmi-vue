<template>
  <h1>Trending</h1>
  <VChart class="chart" :init-option="{renderer: 'svg'}" :option="option" />
</template>

<script setup>
import { ref, provide } from "vue";
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { PieChart, BarChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";

import VChart, { THEME_KEY } from "vue-echarts";

use([
  SVGRenderer,
  PieChart,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

provide([THEME_KEY], "light")

const getBarColor = (e, p) => {
  if (p === "color") {
    if (e === 0) {
      return '#ccc';
    } else if (e === 1) {
      return '#6c0';
    } else if (e === 2) {
      return '#ff0';
    } else {
      return '#f90';
    }
  } else {
    if (e === 0) {
      return '偏瘦';
    } else if (e === 1) {
      return '正常';
    } else if (e === 2) {
      return '过重';
    } else {
      return '肥胖';
    }
  }
}

const option = ref({
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
  },
  xAxis: [
    {
      data: ['16', '17', '18', '19', '20', '21', '22'],
      type: 'category',
      name: "时间",
      nameLocation: 'end',
    },
    {
      type: 'value',
      name: "(11月)",
      nameLocation: 'end',
      min: 0,
      max: 100,
      show: false
    }
  ],
  yAxis: [
    {
      name: "BMI",
      type: 'value',
      min: 0,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          width: 1
        }
      }
    },
  ],
  series: [
    {
      type: 'line',
      data: [
        { value: 23.4, name: "Direct" },
        { value: 31.0, name: "Email" },
        { value: 23.4, name: "Ad Networks" },
        { value: 13.5, name: "Video Ads" },
        { value: 15.48, name: "Search Engines" }
      ],
      showSymbol: false,
      smooth: 0.3,
    },
    {
      type: 'bar',
      data: [
        { value: 23.4, name: "Direct" },
        { value: 31.0, name: "Email" },
        { value: 23.4, name: "Ad Networks" },
        { value: 13.5, name: "Video Ads" },
        { value: 15.48, name: "Search Engines" }
      ],
      itemStyle: {
        color: 'rgb(141, 216, 248)'
      },
      barWidth: '50%',
    }
  ]
});
</script>

<style>
.chart {
  width: 100%;
  height: 600px;
}
</style>
