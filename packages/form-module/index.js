import utilForm from './utilForm/index.vue'

utilForm.install = (vue) => {
  vue.component(utilForm.name, utilForm)
}

export default utilForm
