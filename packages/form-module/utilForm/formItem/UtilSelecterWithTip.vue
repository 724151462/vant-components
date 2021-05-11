<template>
  <a-form-item
    layout="horizontal"
    :label="inputSearchOption[formKey].label"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
  >
    <a-select
      v-model="inputSearchValue[formKey]"
      :style="inputSearchOption[formKey].styleObj"
      show-search
      option-filter-prop="label"
      :filter-option="filterOption"
      :disabled="!isEdit"
    >
      <a-select-option
        v-for="(item, index) in inputSearchOption[formKey].options"
        :key="index"
        :value="item.value"
      >
        {{ item.label }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<script>
import itemMixin from './itemMixin'
export default {
  mixins: [itemMixin],
  methods: {
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    }
  }
}
</script>

<style lang="less" scope>
.el-input__inner {
  color: #fff;
}
</style>
