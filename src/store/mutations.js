export const Update_Pie = (state, data) => {
  state.pie['series'][0]['data'] = data['data']
  state.pie['legend']['data'] = data['legend']
}
