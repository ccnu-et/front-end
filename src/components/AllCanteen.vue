<template>
  <main>
    <navbar></navbar>
    <h1><a href="">华中师范大学食堂数据分析</a></h1>
    <p class="desc">2017年2014, 2015, 2016级 {{ dataLen }} 条消费记录</p>

    <h2 id="pie"><a href="">华师各食堂消费占比<small>(2017年)</small></a></h2>
    <figure>
      <chart
        :options="pie"
        :init-options="initOptions"
        ref="Pie"
        auto-resize
      />
    </figure>

    <h2 id="line"><a href="">华师主要食堂每日刷卡量<small>(对比)</small></a></h2>
    <figure>
      <chart
        :options="line"
        :init-options="initOptions"
        ref="Line"
        auto-resize
      />
    </figure>

    <h2 id="bar"><a href="">华师刷卡最多的食堂窗口<small>(取前六名)</small></a></h2>
    <figure>
      <chart 
        :options="bar"
        :init-options="initOptions"
        ref="Bar"
        theme="ovilia-green"
        auto-resize
      />
    </figure>
    
    <h2 id="scatter"><a href="">华师各食堂平均消费金额<small>(人民币)</small></a></h2>
    <figure>
      <chart
       :options="scatter"
       ref="Scatter"
       theme="ovilia-green"
       auto-resize
      />
    </figure>

    <foot></foot>

  </main>
</template>

<script>
// components
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/line'
import NavBar from './NavBar'
import Footer from './Footer'
// theme
import 'echarts/theme/dark'
import theme from '../theme.json'
ECharts.registerTheme('ovilia-green', theme)

export default {
  name: 'AllCanteen',
  components: {
    chart: ECharts,
    navbar: NavBar,
    foot: Footer
  },
  data () {
    let options = 'svg'
    return {
      options,
      initOptions: {
        renderer: options.renderer || 'svg'
      }
    }
  },
  computed: {
    dataLen () {
      return this.$store.getters.dataLen
    },
    pie () {
      return this.$store.getters.pie
    },
    line () {
      return this.$store.getters.line
    },
    bar () {
      return this.$store.getters.bar
    },
    scatter () {
      return this.$store.getters.scatter
    }
  },
  mounted () {
    var Pie = this.$refs.Pie
    var Line = this.$refs.Line
    var Bar = this.$refs.Bar
    var Scatter = this.$refs.Scatter

    let pieDataIndex = -1
    let pieDataLen = 10

    this.$store.dispatch('getDataLen')
    Bar.showLoading({
      text: "数据实时处理中.."
    })
    // Bar.hideLoading() 
    this.$store.dispatch('getBarData', Bar)
    Pie.showLoading({
      text: "数据实时处理中.."
    })
    this.$store.dispatch('getPieData', Pie)
    // Pie.hideLoading()
    Line.showLoading({
      text: "数据实时处理中.."
    })
    this.$store.dispatch('getLineData', Line)
    // Line.hideLoading()
    Scatter.showLoading({
      text: "数据实时处理中.."
    })
    this.$store.dispatch('getScatterData', Scatter)
    // Scatter.hideLoading()

    setInterval(() => {
      Pie.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: pieDataIndex
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
