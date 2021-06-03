import list from './list/index.vue'

list.install = (vue) => {
  vue.component(list.name, list)
}

export default list
