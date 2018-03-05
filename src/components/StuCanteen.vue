<template>
  <div class="main">
  <navbar></navbar>

  <h1><a href="">华中师范大学个人消费数据分析(test)</a></h1>
    <sui-form>
      <sui-form-field>
        <input id="sid" v-model="sid" placeholder="请输入学号">
      </sui-form-field>
      <button type="submit" @click.prevent="getRecommends"
          style="font-size:15px;">查询</button>
    </sui-form>

  <figure>
    <h1 id=""><a href="">个人食堂消费报告<small>(2017年)</small></a></h1>
    <h3 class="desc">{{ info }}</h3>
    <div v-html="report"></div>

    <div v-html="breakfast.head"></div>
    <sui-card-group :items-per-row="3">
      <sui-card v-model="breakfast"
                v-for="food in breakfast.recommends"
                v-bind:key="food.key">
        <sui-image :src="food.src" />
        <sui-card-content>
            <sui-card-header>{{ food.name }}</sui-card-header>
            <sui-card-meta>{{ food.canteen }}</sui-card-meta>
        </sui-card-content>
        <sui-card-content extra>
            消费量: <sui-icon name="likes" /> {{ food.value }}
        </sui-card-content>
        <sui-card-content extra>
          推荐度: <sui-rating icon="star" :max-rating="4" :rating="food.star"/>
        </sui-card-content>
      </sui-card>
    </sui-card-group>

    <div v-html="lunch.head"></div>
    <sui-card-group :items-per-row="3">
      <sui-card v-model="lunch"
                v-for="food in lunch.recommends"
                v-bind:key="food.key">
        <sui-image :src="food.src" />
        <sui-card-content>
            <sui-card-header>{{ food.name }}</sui-card-header>
            <sui-card-meta>{{ food.canteen }}</sui-card-meta>
        </sui-card-content>
        <sui-card-content extra>
            消费量: <sui-icon name="likes" />{{ food.value }}
        </sui-card-content>
        <sui-card-content extra>
          推荐度: <sui-rating icon="star" :max-rating="4" :rating="food.star"/>
        </sui-card-content>
      </sui-card>
    </sui-card-group>

    <div v-html="dinner.head"></div>
    <sui-card-group :items-per-row="3">
      <sui-card v-model="dinner"
                v-for="food in dinner.recommends"
                v-bind:key="food.key">
        <sui-image :src="food.src" />
        <sui-card-content>
            <sui-card-header>{{ food.name }}</sui-card-header>
            <sui-card-meta>{{ food.canteen }}</sui-card-meta>
        </sui-card-content>
        <sui-card-content extra>
            消费量: <sui-icon name="likes" />{{ food.value }}
        </sui-card-content>
        <sui-card-content extra>
          推荐度: <sui-rating icon="star" :max-rating="4" :rating="food.star"/>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </figure>

    <foot></foot>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.min.css'
import NavBar from './NavBar'
import Footer from './Footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'StuCanteen',
  components: {
    navbar: NavBar,
    foot: Footer
  },
  data () {
    return {
      sid: '',
    }
  },
  computed: {
    report () {
      return this.$store.getters.recommends['report'] ||
            "<h2>请输入学号获取你的食堂消费报告!</h2>" + 
            "<img src='http://oylyq3gv4.bkt.clouddn.com/chuyin.png' width=400px height=350px/>"
    },
    breakfast () {
      return this.$store.getters.recommends['breakfast']
    },
    lunch () {
      return this.$store.getters.recommends['lunch']
    },
    dinner () {
      return this.$store.getters.recommends['dinner']
    },
    info () {
      return this.$store.getters.recommends['info']
    }
  },
  methods: {
    getRecommends () {
      var sid = this.sid
      this.$store.dispatch('getRecommends', {sid: sid})
    }
  },   
  mounted () {
    this.$store.dispatch('CleanLastRe')
  }
}     
</script>

<style>
  .main {
    height: 600px;
    width: 800px;
    margin: 0 auto;
  }
</style>
