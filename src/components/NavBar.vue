<template>
  <div class="nav">
    <button id="show-modal" @click="show()">切换</button>
    <!-- modal默认不会出现, 需要点击事件触发 -->
    <navbar-modal name="test-modal">
      <div class="nav-button">
        <button id="ccnu" v-on:click="to_ccnu">全校数据分析</button>
        <button id="stu" v-on:click="to_stu">个人数据分析</button>
      </div>
      <div class="logo">
        <img src="../assets/ccnulogo.png" width="180px" height="180px">
      </div>
    </navbar-modal>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: [],  // 数据传递
  methods: {
    show () {
      this.$modal.show('test-modal')
    },
    hide () {
      this.$modal.hide('test-modal')
    },
    to_stu () {
      this.$router.push('stu')
    },
    to_ccnu () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.v--modal-overlay {
  background-color: rgba(0,0,0,.8);
  width: 100%;
  height: 100%;
}

.v--modal-overlay .v--modal-box {
  position: relative;
  overflow: hidden;
  /* box-sizing: border-box; */
  background: transparent;
  border: 0px;
}

.v--modal-overlay .v--modal-box .nav-button {
  margin-top: 20px;
}

.v--modal-overlay .v--modal-box .logo {
  margin-top: 100px;
  text-align: center;
}

button#show-modal {
  font-size: 15px;
}

.v--modal-overlay .v--modal-box .nav-button button {
  font-size: 40px;
  background-color: transparent;
  color: white;
  border: 10px;
}

.v--modal-overlay .v--modal-box .nav-button button#ccnu {
  float: right
}

.v--modal-overlay .v--modal-box .nav-button button#stu {
  float: left
}
</style>
