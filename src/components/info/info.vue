<template>
  <div id="info">
    <el-container>
      <el-header>
        <headline :title="title"></headline>
      </el-header>
      <el-main>
        <!-- 基本信息 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">基本信息</span>
            <el-button class="el-icon-edit" style="float: right; padding: 3px 0" type="text"
            @click="showBaseDialog"></el-button>
          </div>
          <div v-for="(baseInfo, index) in baseInfos" :key="index" class="text item">
            {{ baseInfo.text }}{{ baseInfo.content }}
          </div>
        </el-card>
        <!-- 就诊信息 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">就诊信息</span>
            <el-button class="el-icon-edit" style="float: right; padding: 3px 0" type="text"
              @click="showMedicalDialog"></el-button>
          </div>
          <div v-if="JSON.stringify(this.medicalInfos) !== '{}'" class="text item">
            <div v-for="(medicalInfo, index) in medicalInfos" :key="index">
              {{ medicalInfo.text }}{{ medicalInfo.content }}
            </div>
          </div>
          <div v-else class="text item">暂无个人信息，请添加！</div>
        </el-card>
        <v-dialog :dialog-show.sync="baseDialogShow" :dialog-title="dialogTitle" :dialog-form="baseInfos"
          @closeDialog="closeBaseDialog"></v-dialog>
        <v-dialog :dialog-show.sync="medicalDialogShow" :dialog-title="dialogTitle" :dialog-form="medicalInfos"
          @closeDialog="closeMedicalDialog"></v-dialog>
      </el-main>
      <el-footer>
        <el-button type="primary" class="save-btn" @click="saveUserInfo">保存</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headline from '../headline/headline'
import formLayer from '../formLayer/formLayer'

export default {
  name: 'info',
  data () {
    return {
      title: '信息管理',
      avatar: 'url',
      // 基础信息
      baseInfos: {
        name: {
          text: '姓名：',
          content: ''
        },
        sex: {
          text: '性别：',
          content: ''
        },
        age: {
          text: '年龄：',
          content: ''
        },
        mobile: {
          text: '手机号：',
          content: ''
        }
      },
      // 就诊信息
      medicalInfos: {
        idCard: {
          text: '身份证：',
          content: ''
        },
        medicalCard: {
          text: '就诊卡：',
          content: ''
        }
      },
      // 控制修改基本信息弹窗显示隐藏
      baseDialogShow: false,
      medicalDialogShow: false,
      // 表单标签标题
      dialogTitle: ''
    }
  },
  methods: {
    showBaseDialog () {
      this.baseDialogShow = true
      this.dialogTitle = '基本信息'
    },
    showMedicalDialog () {
      this.medicalDialogShow = true
      this.dialogTitle = '就诊信息'
    },
    closeBaseDialog () {
      this.baseDialogShow = false
    },
    closeMedicalDialog () {
      this.medicalDialogShow = false
    },
    saveUserInfo: function () {
      let baseInfos = this.baseInfos
      let medicalInfos = this.medicalInfos
      let data = {
        id: this.id,
        name: baseInfos.name.content,
        sex: baseInfos.sex.content,
        age: baseInfos.age.content,
        phone: baseInfos.mobile.content,
        idcard: medicalInfos.idCard.content,
        medicalcard: medicalInfos.medicalCard.content
      }
      console.log('data', data)
      this.$http.post('/user/updateUserInfo.do', data, {emulateJSON: true}).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    // 获取用户信息
    let _this = this
    let openId = '123'
    this.$http.get('/user/getUserInfo.do', openId).then(res => {
      if (res.status === 200) {
        let baseInfos = _this.baseInfos
        let medicalInfos = _this.medicalInfos
        let data = JSON.parse(res.bodyText).data
        console.log(data)
        _this.id = data.id
        baseInfos.name.content = data.name
        baseInfos.sex.content = data.sex
        baseInfos.age.content = data.age
        baseInfos.mobile.content = data.phone
        medicalInfos.idCard.content = data.idcard
        medicalInfos.medicalCard.content = data.medicalcard
      }
    })
  },
  components: {
    headline,
    'v-dialog': formLayer
  }
}
</script>

<style lang="sass" type="text/css">
.box-card
  margin: 10px;
  .title
    font-size: 16px;
  .text
    font-size: 14px;
.el-dialog
  margin: 0 10px;
  width: calc(100% - 20px);
  label
    text-align: left;
</style>
