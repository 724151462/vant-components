export default {
  computed: {
    inputOption() {
      console.log(this.$attrs)
      return this.$attrs.inputOption
    },
    inputSearchValue() {
      return this.$attrs.inputSearchValue
    },
    formItemLayout() {
      return this.$attrs.formItemLayout
    },
    layout() {
      return this.$attrs.layout
    },
    formKey() {
      return this.$attrs.formKey
    },
    isEdit() {
      return this.$attrs.isEdit
    }
  }
}
