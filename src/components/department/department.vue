<template>
  <div id="department">
    <el-container>
      <el-header>
        <headline :title="title"></headline>
      </el-header>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-if="chosen.date !== ''">{{ chosen.date }}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="chosen.department !== ''">{{ chosen.department }}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="chosen.doctor !== ''">{{ chosen.doctor }}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="chosen.type !== ''">{{ chosen.type }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange">
          <el-table-column property="department" label="选择科室"></el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <el-button type="primary" class="submit-btn" @click="preChoice">上一步</el-button>
        <el-button type="primary" id="next-btn" @click="nextChoice">下一步</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headline from '../headline/headline'

export default {
  name: 'department',
  data () {
    return {
      title: '选择科室',
      tableData: [{
        department: '内科'
      }, {
        department: '外科'
      }, {
        department: '妇科'
      }, {
        department: '儿科'
      }],
      chosen: {
        date: '',
        department: '',
        doctor: '',
        type: ''
      }
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.currentRow = val
      console.log(this.currentRow.department)
      this.chosen.department = this.currentRow.department
    },
    preChoice () {
      this.$router.replace({
        name: 'date',
        params: {
          date: this.chosen.date
        }
      })
    },
    nextChoice () {
      var _this = this
      if (this.chosen.date !== '') {
        this.$router.replace({
          name: 'doctor',
          params: {
            date: _this.chosen.date,
            department: _this.chosen.department
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
    console.log(this.$route.params)
    this.chosen.date = this.$route.params.date
    this.chosen.department = this.$route.params.department
  },
  components: {
    headline
  }
}
</script>

<style lang="sass" type="text/css">
.el-breadcrumb
  min-height: 50px;
  line-height: 50px;
  .breadcrumb-tips
    font-size: 20px;
    font-weight: bold;
.el-button
  width: 100%;
  & + .el-button
    margin-top: 10px;
    margin-left: 0;
</style>
