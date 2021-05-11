<template>
  <van-field
    :name="formKey"
    :label="inputOption[formKey].label"
  >
    <template #input>
      <van-radio-group
        v-model="inputOption[formKey].value"
        :placeholder="inputOption[formKey].placeholder"
        :rules="inputOption[formKey].rules"
        direction="horizontal"
      >
        <van-radio
          v-for="(item, index) in inputOption[formKey].options"
          :key="index"
          :name="item.value"
        >
          {{ item.label }}
        </van-radio>
      </van-radio-group>
    </template>
  </van-field>
</template>

<script>
import itemMixin from './itemMixin'
export default {
  mixins: [itemMixin]
}
</script>

<style lang="scss" scope>
.el-input__inner {
  color: #fff;
}
</style>
