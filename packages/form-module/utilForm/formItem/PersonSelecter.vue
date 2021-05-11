<template>
  <div>
    <van-field
      style="display: none"
      readonly
      clickable
      name="picker"
      :value="inputOption[formKey].value"
      :label="''"
    />
    <AddItems
      :title="inputOption[formKey].label"
      :url="inputOption[formKey].url"
      @addItems="addPerson"
    >
      <template slot="list">
        <div
          v-for="(item, index) in personlist"
          :key="index"
          class="plist"
        >
          <div class="person">
            <!-- <img src="../../../assets/xuncha_img_head.png" alt="" /> -->
            <span>{{ item.name }}</span>
          </div>
          <!-- <img class="del" src="../../../assets/xuncha_btn_del.png" alt="" /> -->
        </div>
      </template>
    </AddItems>
  </div>
</template>

<script>
import itemMixin from './itemMixin'
import AddItems from './AddItems'
export default {
  components: { AddItems },
  mixins: [itemMixin],
  data() {
    return {
      value: '',
      // columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
      personlist: [{ name: '张三' }, { name: '李四' }],
      placelist: [
        { name: '欢唱ktv', details: '福建省xxxxx' },
        { name: '悲唱ktv', details: '福建省xxxxx' }
      ]
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
    addPerson() {
      this.inputOption[this.formKey].value = 333
    },
    addAddr() {
      this.inputOption[this.formKey].value = 456
    }
  }
}
</script>

<style lang="scss" scope>
.el-input__inner {
  color: #fff;
}
.plist {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px;
  margin-top: 10px;
  .person {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
    span {
      margin-left: 10px;
    }
  }
  .del {
    height: 20px;
  }
  .addr {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .addr-name {
    }
    .addr-details {
      color: #7a869a;
      font-size: 14px;
    }
  }
}
</style>
