export const Update_Pie = (state, data) => {
  state.pie['series'][0]['data'] = data['data']
  state.pie['legend']['data'] = data['legend']
}

export const Update_Line = (state, data) => {
  state.line['series'] = data
}

export const Update_Bar = (state, data) => {
  // xAxis: 食堂窗口
  let tlb = {
    xAxis: {
      data: data['breakfast']['xAxis']
    },
    series : [{
      type: 'bar',
      itemStyle: {
        normal: {
          color: "red"
        }
      },
      data: data['breakfast']['data'],
    }]
  }
  let tll = {
    xAxis: {
      data: data['lunch']['xAxis']
    },
    series : [{
      type: 'bar',
      itemStyle: {
        normal: {
          color: "blue"
        }
      },
      data: data['lunch']['data'],
    }]
  }
  let tld = {
    xAxis: {
      data: data['dinner']['xAxis']
    },
    series : [{
      type: 'bar',
      itemStyle: {
        normal: {
          color: "green"
        }
      },
      data: data['dinner']['data'],
    }]
  }
  state.bar.options.push(tlb)
  state.bar.options.push(tll)
  state.bar.options.push(tld)
}


export const Update_Scatter = (state, data) => {
  state.scatter['series'][0]['markLine']['data'][0]['yAxis'] = data['avg']
  state.scatter['series'][1]['data'] = data['low']
  state.scatter['series'][2]['data'] = data['high']
}
