<template>
  <div>
    <van-field
      readonly
      clickable
      :name="formKey"
      :label="inputOption[formKey].label"
      :value="inputOption[formKey].value"
      :placeholder="inputOption[formKey].placeholder"
      right-icon="notes-o"
      @click="showPicker = true"
    />
    <van-popup
      v-model="showPicker"
      position="bottom"
    >
      <van-datetime-picker
        :type="inputOption[formKey].timeType"
        title="选择时间"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { timeFormat } from '../util'
import itemMixin from './itemMixin'
export default {
  mixins: [itemMixin],
  data() {
    return {
      showPicker: false
    }
  },
  mounted() {
    console.log(this.$attrs)
  },
  methods: {
    onConfirm(val) {
      this.inputOption[this.formKey].value = timeFormat(
        val,
        this.inputOption[this.formKey].timeType
      )
      this.showPicker = false
    },
    formatter(type, val) {
      if (type === 'year') {
        return val + '年'
      }
      if (type === 'month') {
        return val + '月'
      }
      if (type === 'day') {
        return val + '日'
      }
      return val
    }
  }
}
</script>

<style lang="scss" scope>
.el-input__inner {
  background-color: #0f2b53;
  border: 1px solid #255294;
}
.el-range-input {
  background-color: #0f2b53;
}
.el-date-editor .el-range-separator {
  color: #fff;
}
</style>
