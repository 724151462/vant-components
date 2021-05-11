<template>
  <a-form-item
    :label="inputSearchOption[formKey].label"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
  >
    <quill-editor
      v-model="inputSearchValue[formKey]"
      class="ql-editor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    />
  </a-form-item>
</template>

<script>
import itemMixin from './itemMixin'
export default {
  mixins: [itemMixin],
  data: function() {
    return {
      editorOption: {
        modules: {
          // placeholder: '请输入描述',
          toolbar: [
            ['bold', 'underline'], // toggled buttons
            [{ header: 1 }, { header: 2 }], // 1、2 级标题
            // [{ align: [] }], //对齐方式
            // [{ font: [] }], //字体
            [
              { color: ['#fff', 'red', '#000'] }
              // { background: [] }
            ] // 字体颜色，字体背景颜色
          ]
        },
        placeholder: '请输入描述'
      }
    }
  },
  methods: {
    onEditorBlur(editor) {
      // 失去焦点事件
    },
    onEditorFocus(editor) {
      // 获得焦点事件
    },
    onEditorChange({ editor, html, text }) {
      // 编辑器文本发生变化
      // this.content可以实时获取到当前编辑器内的文本内容
      console.log(this.content)
    }
  }
}
</script>

<style scope>
.ql-editor {
  padding: 0;
}
.ql-container {
  height: 100px;
}
</style>
