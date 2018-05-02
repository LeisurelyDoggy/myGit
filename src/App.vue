<template>
  <div id="app">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="页面" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.page }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址">
        <template slot-scope="scope">
          <el-button size="mini" @click="showLayer">
            <router-link :to="scope.row.address">跳转</router-link>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="layerFlag" id="view-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'

export default {
  name: 'App',
  data () {
    return {
      layerFlag: false,
      tableData: [{
        page: '我的信息',
        address: '/info'
      },
      {
        page: '预约挂号',
        address: '/appointment'
      }]
    }
  },
  methods: {
    // 点击主页跳转按钮展示view
    showLayer () {
      this.layerFlag = true
    }
  },
  created () {
    // 如果不是根路由，就显示view
    if (this.$route.path !== '/') {
      this.layerFlag = true
    }
  }
}
</script>

<style lang="sass" type="text/css">
#app
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
#view-wrap
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1;
  &.no-layer
    display: none;
</style>
