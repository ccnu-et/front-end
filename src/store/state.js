const state = {
  pie: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: []
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  },
  bar: {
    baseOption: {
      timeline: {
        loop: true,
        axisType: 'category',
        show: true,
        autoPlay: true,
        playInterval: 2500,
        data: ['早', '中', '晚']
      },
      tooltip: {},
      legend: {
        data: ['刷卡量']
      },
      xAxis: {
        data: []
      },
      yAxis: {
        axisLabel: {show: true}
      },
      series: [{
        type: 'bar',
        name: '刷卡量',
        itemStyle: {
          normal: {
            color: "red"
          }
        },
        data: []
      }]
    },
    options: []
  }
}

export default state
