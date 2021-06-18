<template>
  <h1>Trending</h1>
  <VChart class="chart" :init-option="{renderer: 'svg'}" :option="option" />
</template>

<script setup>
import {ref, provide, defineProps, toRefs} from "vue";
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

const props = defineProps({
  chartData: {
    type: Array,
    default: () => []
  },
  dateData: {
    type: Array,
    default: () => []
  }
})

const { chartData, dateData } = toRefs(props)

const option = ref({
  tooltip: {
    trigger: "item",
    formatter: "{b} <br/> BMI: {c}"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
  },
  xAxis: [
    {
      data: dateData,
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
      data: chartData,
      showSymbol: false,
      smooth: 0.3,
    },
    {
      type: 'bar',
      data: chartData,
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
