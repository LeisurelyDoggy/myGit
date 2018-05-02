<template>
  <div id="formLayer">
    <el-dialog :title="dialogTitle" :visible.sync="dialogShow" :modal-append-to-body="false" :before-close="handleClose">
      <el-form :model="dialogForm">
        <el-form-item v-for="(item, index) in dialogForm" :key="index" :label="item.text"
          label-width="80px">
          <el-input v-model="item.content" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="closeDialog">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'formLayer',
  props: {
    dialogShow: {
      type: Boolean
    },
    dialogTitle: {
      type: String
    },
    dialogForm: {
      type: Object
    }
  },
  data () {
    return {
      myDialogShow: this.dialogShow
    }
  },
  created () {
    // console.log(this)
  },
  methods: {
    handleClose () {
      this.closeDialog()
    },
    closeDialog () {
      this.myDialogShow = false
      this.$emit('closeDialog')
    }
  },
  mounted () {
    console.log(this.myDialogShow)
  }
}
</script>

<style lang="sass" type="text/css">

</style>
