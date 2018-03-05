const state = {
  dataLen: 884515,
  pie: {
    toolbox:{
      right:20,
      top: 30,
      feature:{
      	saveAsImage: {},
      	restore: {},
      }
	},
    tooltip: {
      trigger: 'item',
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
  line: {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data:[]
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      right:20,
      top: 30,
      feature: {
        saveAsImage: {},
        restore: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value'
    },
    series: []
  },
  bar: {
    baseOption: {
      toolbox:{
        right: 20,
        top: 30,
        feature:{
          saveAsImage: {},
          restore: {},
        }
      },
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
            color: "red",
          }
        },
        data: []
      }]
    },
    options: []
  },
  scatter: {
    toolbox:{
      right:20,
      top: 30,
      feature:{
      	saveAsImage: {},
      	restore: {},
      }
	},
    tooltip : {
      trigger: 'item',
      showDelay : 0,
      formatter : function (params) {
        if (params.value.length > 1) {
          return params.data[2] + ' :<br/>'
            + params.value[0] + '元; '
            + params.value[1] + '元 ';
        }
        else {
          return params.seriesName
        }
      },
      axisPointer:{
        show: true,
        type : 'cross',
        lineStyle: {
          type : 'solid',
          width : 1
        },
	    label:{
	      fontSize: 12,
	      formatter: function(params) {
	        return params.value.toFixed(2);
	   	  }
	    }
      }
    },
    legend: {
      right: 10,
      data: ['低于平均', '高于平均']
    },
    xAxis: {
      name: "最高消费",
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    yAxis: {
      name: "平均消费",
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      scale: true
    },
    series: [
      {
        type: 'line',
        markLine: {
          symbol: 'none',
          data: [{
            yAxis: 0,
            valueIndex: 1,
            lineStyle: {
              normal: {
                color: 'green',
                type: 'dashed'
              }
            },
            label: {
              normal: {
                show: true
              }
            }
          }]
        },
      },
      {
        name: '低于平均',
        data: [],
        type: 'scatter',
        symbolSize: 40,
        itemStyle: {
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: 'rgb(251, 118, 123)'
          }
        }
      },
      {
        name: '高于平均',
        data: [],
        type: 'scatter',
        symbolSize: 40,
        itemStyle: {
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: 'rgb(129, 227, 238)'
          }
        }
      }
    ] 
  },
  recommends: {
    breakfast: {head: '', recommends: [] },
    lunch: {head: '', recommends: [] },
    dinner: {head: '', recommends: [] },
    report: "",
    info: ""
  }
}

export default state
