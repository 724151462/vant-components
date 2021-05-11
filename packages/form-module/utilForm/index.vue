<template>
  <div class="bg-gray">
    <van-form
      class="vanform"
      @submit="onSubmit"
      v-on="$listeners"
    >
      <ItemFactory
        v-for="(item, index) in formItem.inputList"
        :key="index"
        :name="item.component"
        :inputOption="formItem.inputOption"
        :formKey="item.key"
      />
      <slot name="diyField" />
      <slot name="btn" />
    </van-form>
  </div>
</template>

<script>
import { formTypes } from './formTypes'
// import { Form } from 'vant'
import ItemFactory from './formItem/ItemFactory'
console.log(formTypes)
export default {
  components: {
    ItemFactory
  },
  props: {
    formType: {
      type: String,
      require: true
    },
    inputOption: {
      type: Object
    }
  },
  data() {
    return {
      formItem:
        // 根据type加载对应表单，得到inputList（组件及key）和inputOption（字段配置）
        formTypes(this.formType, '')
    }
  },
  mounted() {
    this.formItem.inputOption = this.inputOption
    console.log(this.formItem.inputOption)
  },
  methods: {
    onSubmit(val) {
      this.$emit('onSubmit', val)
    }
  }
}
</script>

<style></style>
