<template>
  <div class="hello">
    <van-cell
      title="表单"
      is-link
      to="/form/index"
    />
    <van-cell
      title="列表"
      is-link
      to="/list/index"
    />
  </div>
</template>

<script>
// import { Button } from 'element-ui'
// import 'element-ui/lib/theme-chalk/button.css'
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  methods: {
    onSubmit(val) {
      console.log(val)
      // this.$api.post('collectAdd', val).then(res => {
      //   Toast.success('报送成功')
      // })
    }
  }
}
</script>
