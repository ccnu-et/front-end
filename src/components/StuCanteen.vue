<template>
  <div class="main">
  <navbar></navbar>
  <h1>个人食堂窗口推荐</h1>

    <sui-form>
      <sui-form-field>
        <input id="sid" v-model="sid" placeholder="请输入学号">
      </sui-form-field>
      <button type="submit" @click.prevent="getRecommends"
          style="font-size:15px;">获取推荐</button>
    </sui-form>

    <h2>{{ breakfast.head }}</h2>
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
          Rating: <sui-rating icon="star" :max-rating="4" :rating="food.star"/>
          <sui-icon name="likes" />1000
        </sui-card-content>
      </sui-card>
    </sui-card-group>

    <h2>{{ lunch.head }}</h2>
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
          Rating: <sui-rating icon="star" :max-rating="4" :rating="food.star"/>
          <sui-icon name="likes" />1000
        </sui-card-content>
      </sui-card>
    </sui-card-group>

    <h2>{{ dinner.head }}</h2>
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
          Rating: <sui-rating icon="star" :max-rating="4" :rating="food.star"/>
          <sui-icon name="likes" />1000
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.min.css'
import NavBar from './NavBar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'StuCanteen',
  components: {
    navbar: NavBar
  },
  data () {
    return {
      sid: ''
    }
  },
  computed: {
    breakfast () {
      return this.$store.getters.recommends['breakfast']
    },
    lunch () {
      return this.$store.getters.recommends['lunch']
    },
    dinner () {
      return this.$store.getters.recommends['dinner']
    },
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
