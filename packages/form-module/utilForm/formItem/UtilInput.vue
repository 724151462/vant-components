<template>
  <van-field
    v-model="inputOption[formKey].value"
    :name="formKey"
    :label="inputOption[formKey].label"
    :placeholder="inputOption[formKey].placeholder"
    :rules="inputOption[formKey].rules"
    :type="inputOption[formKey].type || ''"
  />
</template>

<script>
import itemMixin from './itemMixin'
export default {
  mixins: [itemMixin],
  data() {
    return {}
  },
  mounted() {
    console.log(this.inputOption)
  },
  methods: {}
}
</script>

<style lang="scss" scope></style>
