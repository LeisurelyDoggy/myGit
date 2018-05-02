<template>
  <div id="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-if="chosen.date !== ''">{{ chosen.date }}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="chosen.department !== ''">{{ chosen.department }}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="chosen.doctor !== ''">{{ chosen.doctor }}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="chosen.type !== ''">{{ chosen.type }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: {
    chosen: {
      type: Object
    }
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
</style>
