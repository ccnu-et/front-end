import http from '../http'

export const getPieData = ({ commit }) => {
  var headers = {
    'Content-Type': 'application/json'
  }
  http.get('/max_canteen/', headers).then((res) => {
    commit('Update_Pie', res.data)
  })
}
