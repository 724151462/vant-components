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
    formItem: {
      type: Object,
      require: true,
      default: () => {
        return {
          inputList: [
            {
              component: 'UtilInput',
              key: 'name'
            }
          ],
          inputOption: {
            name: {
              label: '姓名',
              value: '',
              placeholder: '请输入人姓名',
              rules: [{ required: true, message: '请输入人姓名' }]
            }
          }
        }
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    onSubmit(val) {
      this.$emit('onSubmit', val)
    }
  }
}
</script>

<style></style>
