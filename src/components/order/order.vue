<template>
  <div id="order">
    <el-container>
      <el-header>
        <headline :title="title"></headline>
      </el-header>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>订单详情</span>
          </div>
          <div v-for="(orderInfo, index) in orderInfos" :key="index" class="text item">
            {{ orderInfo.text }} : {{ orderInfo.content }}
          </div>
        </el-card>
      </el-main>
      <el-footer>
        <el-button type="primary" id="pre-btn" @click="preChoice">上一步</el-button>
        <el-button type="primary" id="next-btn" @click="payMyOrder">确认订单，去支付</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headline from '../headline/headline'

export default {
  name: 'order',
  data () {
    return {
      title: '确认订单',
      // 订单信息
      orderInfos: {
        Orderid: {
          text: '订单号',
          content: 'WX2018041941738599'
        },
        department: {
          text: '科室',
          content: '内科'
        },
        doctor: {
          text: '医生',
          content: '王医生'
        },
        job: {
          text: '职称',
          content: '副主任医师'
        },
        type: {
          text: '号类',
          content: '专家门诊'
        },
        date: {
          text: '就诊日期',
          content: '2018-4-25'
        },
        time: {
          text: '就诊时间',
          content: '上午'
        },
        cost: {
          text: '挂号费',
          content: '7.00 元'
        },
        name: {
          text: '姓名',
          content: '朱蕴秋'
        },
        medicalCard: {
          text: '就诊卡号',
          content: '无卡预约'
        }
      }
    }
  },
  created () {
    console.log(this.$route.params)
    this.chosen.date = this.$route.params.date
    this.chosen.department = this.$route.params.department
    this.chosen.doctor = this.$route.params.doctor
  },
  methods: {
    preChoice () {},
    payMyOrder () {}
  },
  components: {
    headline
  }
}
</script>

<style lang="sass" type="text/css">

</style>
