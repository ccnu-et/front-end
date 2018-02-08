<template>
  <main>
    <!-- <chart 
      id="logo"
      :options="logo"
      :init-options="initOptions"
      auto-resize
    /> -->
    <h1><a href="">华中师范大学食堂数据分析(test)</a></h1>
    <p class="desc">2017年2014, 2015, 2016级884579条消费记录</p>

    <h2 id="pie"><a href="">华师各食堂消费占比<small>(2017年)</small></a></h2>
    <figure>
      <chart
        :options="pie"
        :init-options="initOptions"
        ref="Pie"
        auto-resize
      />
    </figure>

    <h2 id="bar"><a href="">刷卡最多的食堂窗口<small>(取前六名)</small></a></h2>
    <figure>
      <chart 
        :options="bar"
        :init-options="initOptions"
        ref="Bar"
        theme="ovilia-green"
        auto-resize
      />
    </figure>
    
    <footer>
      <a href="//github.com/misakar">@misakar</a>|<a
          href="http://www.wtfpl.net/">WTFPL License</a>|<a href="https://github.com/ccnu-et/front-end/">View on GitHub</a>
    </footer>

  </main>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
// import 'echarts-liquidfill'
// theme
import 'echarts/theme/dark'
import theme from '../theme.json'
ECharts.registerTheme('ovilia-green', theme)

export default {
  name: 'AllCanteen',
  components: {
    chart: ECharts
  },
  data () {
    let options = 'svg'
    let pie = this.$store.getters.pie
    let bar = this.$store.getters.bar
    return {
      options,
      pie,
      bar,
      initOptions: {
        renderer: options.renderer
      }
    }
  },
  mounted () {
    let pieDataIndex = -1
    let pieDataLen = 10
    var Pie = this.$refs.Pie
    var Bar = this.$refs.Bar

    Pie.showLoading()
    this.$store.dispatch('getPieData', Pie)
    // Pie.hideLoading()
    Bar.showLoading()
    this.$store.dispatch('getBarData', Bar)
    // Bar.hideLoading()

    setInterval(() => {
      Pie.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: pieDataIndex,
      })
      pieDataIndex = (pieDataIndex + 1) % pieDataLen
      Pie.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: pieDataIndex
      })
      Pie.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: pieDataIndex
      })
    }, 1000)
  }
}
</script>
