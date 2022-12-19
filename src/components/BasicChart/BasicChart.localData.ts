export const initialStateBasicChart: Highcharts.Options = {
  title: {
      text: 'My chart'
  },
  series: [{
      type: 'line',
      data: [1, 2, 3]
  }],
  xAxis: {
    categories: ['A', 'B', 'C'],
  },
}
