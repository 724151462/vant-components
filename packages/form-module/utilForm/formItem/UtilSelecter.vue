<template>
  <div>
    <van-field
      v-show="false"
      :name="formKey + 'Obj'"
      :value="JSON.stringify(selectobj)"
    />
    <van-field
      readonly
      clickable
      :name="formKey"
      :value="inputOption[formKey].value"
      :label="inputOption[formKey].label"
      :placeholder="inputOption[formKey].placeholder"
      right-icon="arrow-down"
      @click="showPicker = true"
    />
    <van-popup
      v-model="showPicker"
      position="bottom"
    >
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import itemMixin from './itemMixin'
export default {
  mixins: [itemMixin],
  data() {
    return {
      selectobj: null,
      value: '',
      // columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false
    }
  },
  computed: {
    columns: function() {
      return this.inputOption[this.formKey].options.map((v) => {
        return v.label
      })
    }
  },
  methods: {
    onConfirm(value, key) {
      this.inputOption[this.formKey].value = value
      this.selectobj = this.inputOption[this.formKey].options[key]
      this.showPicker = false
    }
  }
}
</script>

<style lang="scss" scope>
.el-input__inner {
  color: #fff;
}
</style>
