<template>
  <div id="headline">
      {{ title }}
  </div>
</template>

<script>
export default {
  name: 'headline',
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="sass" type="text/css">
#headline
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 24px;
  font-weight: normal;
  font-family: "PingFang SC";
</style>
