<template>
  <h1>TrendingCharts</h1>
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

provide([THEME_KEY], "dark")

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

const colorList = [
  'rgba(225,245,205,1)',
  'rgba(225,245,205,1)',
  'rgba(253,227,197,1)',
  'rgba(243,212,213,1)',
  'rgba(199,177,179,1)'
];

const option = ref({
  title: {
    text: "Traffic Sources",
    left: "center"
  },
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
      type: 'value',
      min: 0,
      splitLine: {
        show: true
      }
    },
    {
      name: "横着的",
      type: 'category',
      data: ["偏瘦", "正常", "过重", "肥胖"],
      show: false
    }
  ],
  series: [
    {
      type: 'bar',
      yAxisIndex: 1,
      xAxisIndex: 1,
      data: new Array(10).fill(3),
      z: 10,
      itemStyle: {
        color: function(params) {
          return getBarColor(params.dataIndex, 'color');
        }
      },
      label: {
        show: true,
        formatter: function(params) {
          return getBarColor(params.dataIndex, 'label');
        },
        position: 'inside',
        distance: 10,
        color: '#fff'
      },
      barWidth: '100%'
    },
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
      lineStyle: {
        color: '#fff'
      },
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
