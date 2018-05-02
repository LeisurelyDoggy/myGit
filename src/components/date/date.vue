<template>
  <div id="date">
    <el-container>
      <el-header>
        <headline :title="title"></headline>
      </el-header>
      <el-main>
        <breadcrumb :chosen="chosen"></breadcrumb>
        <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange">
          <el-table-column property="date" label="请选择日期"></el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <el-button type="primary" id="next-btn" @click="nextChoice">下一步</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headline from '../headline/headline'
import breadcrumb from '../breadcrumb/breadcrumb'

export default {
  name: 'date',
  data () {
    return {
      title: '选择日期',
      tableData: [{
        date: '2018-4-18 星期三'
      }, {
        date: '2018-4-19 星期四'
      }, {
        date: '2018-4-20 星期五'
      }, {
        date: '2018-4-21 星期六'
      }, {
        date: '2018-4-22 星期日'
      }, {
        date: '2018-4-23 星期一'
      }, {
        date: '2018-4-24 星期二'
      }],
      chosen: {
        date: '', // 预约日期
        department: '',
        doctor: '',
        type: ''
      },
      type: '' // 预约方式
    }
  },
  methods: {
    // 获取未来七天日期
    getNextWeekDate () {
      const APPOINTMENTDAYS = 7
      // dd.setDate(dd.getDate()+AddDayCount)
      let dateArr = []
      for (let i = 0; i < APPOINTMENTDAYS; i++) {
        let mydate = new Date()
        let nextDate = mydate.setDate(mydate.getDate() + i)
        dateArr.push(nextDate)
      }
      console.log(dateArr)
    },
    // 获取当前选择的日期
    handleCurrentChange (val) {
      this.chosen.date = val.date
    },
    nextChoice () {
      var _this = this
      if (this.chosen.date !== '') {
        this.$router.replace({
          name: 'department',
          params: {
            date: _this.chosen.date
          }
        })
      } else {
        this.$notify.error({
          message: '请选择预约日期',
          type: 'error',
          duration: 1000
        })
      }
    }
  },
  created () {
    this.type = this.$route.params.type
    this.chosen.date = this.$route.params.date
    // 获取未来七天日期
    this.getNextWeekDate()
  },
  components: {
    headline,
    breadcrumb
  }
}
</script>

<style lang="sass" type="text/css">
.el-button
  width: 100%;
</style>
