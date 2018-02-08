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

export const getBarData = ({commit}, Bar) => {
  var headers = {
    'Content-Type': 'application/json'
  }
  return http.get('/max_window/', headers).then((res) => {
    commit('Update_Bar', res.data)
    Bar.hideLoading()
  })
}
