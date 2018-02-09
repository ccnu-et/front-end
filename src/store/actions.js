import http from '../http'

export const getPieData = ({ commit }, Pie) => {
  var headers = {
    'Content-Type': 'application/json'
  }
  return http.get('/max_canteen/', headers).then((res) => {
    commit('Update_Pie', res.data)
    Pie.hideLoading()
  })
}

export const getBarData = ({ commit }, Bar) => {
  var headers = {
    'Content-Type': 'application/json'
  }
  return http.get('/max_window/', headers).then((res) => {
    commit('Update_Bar', res.data)
    Bar.hideLoading()
  })
}

export const getScatterData = ({ commit }, Scatter) => {
  var headers = {
    'Content-Type': 'application/json'
  }
  return http.get('/deal_data/', headers).then((res) => {
    commit('Update_Scatter', res.data)
    Scatter.hideLoading()
  })
}
