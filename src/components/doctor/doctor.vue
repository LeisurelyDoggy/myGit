<template>
  <div id="doctor">
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
          <el-table-column label="选择医生排班">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="职称">
                    <span>{{ props.row.job }}</span>
                  </el-form-item>
                  <el-form-item label="号类">
                    <span>{{ props.row.type }}</span>
                  </el-form-item>
                  <el-form-item label="时间">
                    <span>{{ props.row.time }}</span>
                  </el-form-item>
                  <el-form-item label="剩余">
                    <span>{{ props.row.left }} 个号</span>
                  </el-form-item>
                  <el-form-item label="费用">
                    <span>{{ props.row.cost }} 元</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column property="name" label="姓名"></el-table-column>
            <el-table-column property="type" label="号类"></el-table-column>
            <el-table-column property="cost" label="费用"></el-table-column>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <el-button type="primary" id="pre-btn" @click="preChoice">上一步</el-button>
        <el-button type="primary" id="next-btn" @click="nextChoice">下一步</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headline from '../headline/headline'

export default {
  name: 'doctor',
  data () {
    return {
      title: '选择医生排班',
      tableData: [{
        name: '邓宇晓',
        job: '副主任专家',
        type: '专家门诊',
        time: '上午',
        left: 17,
        cost: '7.00'
      }, {
        name: '邓宇晓',
        type: '副主任专家',
        time: '上午',
        left: 17,
        cost: '7.00'
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
      console.log(this.currentRow.name)
      this.chosen.doctor = this.currentRow.name
    },
    preChoice () {
      this.$router.replace({
        name: 'department',
        params: {
          date: this.chosen.date,
          department: this.chosen.department
        }
      })
    },
    nextChoice () {
      if (this.chosen.date !== '') {
        this.$router.replace({
          name: 'order',
          params: {
            date: this.chosen.date,
            department: this.chosen.department,
            doctor: this.chosen.doctor
          }
        })
      } else {
        this.$notify.error({
          message: '请选择预约医生',
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
.demo-table-expand
  font-size: 0;
  label
    width: 90px;
    color: #99a9bf;
  .el-form-item
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
    .demo-table-expand
      label
        width: 50px;
.el-button
  width: 100%;
  & + .el-button
    margin-top: 10px;
    margin-left: 0;
</style>
