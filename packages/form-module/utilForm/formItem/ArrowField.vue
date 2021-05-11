<template>
  <div>
    <van-field
      style="display: none"
      readonly
      clickable
      :name="formKey"
      :value="inputOption[formKey].value"
      :label="''"
    />
    <van-cell
      :title="inputOption[formKey].label"
      is-link
      :to="inputOption[formKey].path"
      :value="inputOption[formKey].text"
    />
  </div>
</template>

<script>
import itemMixin from './itemMixin'
export default {
  mixins: [itemMixin]
}
</script>

<style></style>
