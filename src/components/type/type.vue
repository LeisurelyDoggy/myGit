<template>
  <div id="type">
    <el-container>
      <el-header>
        <headline :title="title"></headline>
      </el-header>
      <el-main>
      </el-main>
      <el-footer>
        <el-button type="primary" id="next-btn" @click="nextChoice">下一步</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headline from '../headline/headline'

export default {
  name: 'type',
  data () {
    return {
      title: '预约方式'
    }
  },
  methods: {
    nextChoice () {
    }
  },
  created () {

  },
  components: {
    headline
  }
}
</script>

<style lang="sass" type="text/css">

</style>
