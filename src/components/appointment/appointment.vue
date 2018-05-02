<template>
  <div id="appointment">

  </div>
</template>

<script>
import headline from '../headline/headline'

export default {
  name: 'date',
  data () {
    return {
      name: 'appointment',
      title: '预约',
      data () {
        return {
          type: '' // 预约方式
        }
      }
    }
  },
  methods: {
  },
  created () {
    var _this = this
    this.$http.get('/user/getUserInfo.do').then(res => {
      // console.log(res)
      if (res.status === 200) {
        let data = JSON.parse(res.bodyText).data
        console.log(data)
        // 没有就诊卡
        if (data.medicalcard === '') {
          _this.type = '无卡预约'
        } else {
          _this.type = data.medicalcard
        }
        _this.$router.replace({
          name: 'date',
          params: {
            type: _this.type
          }
        })
      }
    })
  },
  components: {
    headline
  }
}
</script>

<style lang="sass" type="text/css">
</style>
