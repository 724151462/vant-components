<template>
  <div class="infoList">
    <van-list
      v-model="loading"
      :finished="finished"
      :finished-text="finishText"
      offset="10"
      :immediate-check="false"
      @load="onLoad"
    >
      <!-- <span style="position: fixed; top: 0; z-index: 1000">{{ loading }}</span> -->
      <van-skeleton
        v-if="dataObj.data.length != 0"
        :row="4"
        :loading="!domShowType"
        class="skel"
      >
        <template>
          <div
            v-for="(v, k) in dataObj.data"
            :key="k"
            class="infoList-main"
            @click="toDetail(v, 'router')"
          >
            <div
              v-if="dataObj.dataType != ''"
              class="ifm-left"
              :class="'ifm-left-' + dataObj.dataType"
            />
            <div class="ifm-right">
              <img
                v-if="infoImgarr.length != 0"
                :style="dataObj.avatarSize"
                class="ifm-img"
                :src="infoImgarr[k]"
                alt=""
                srcset=""
              >
              <div class="ifm-user">
                <div
                  v-for="(item, index) in dataObj.dataMap"
                  :key="index"
                >
                  <h3 v-if="item.type == 'title'">
                    {{ v[item.key] }}
                  </h3>
                  <p v-if="!item.type">
                    <span>{{ item.label }}：</span>{{ v[item.key] }}
                  </p>
                  <span
                    v-if="item.type == 'status'"
                    style="position: absolute"
                    :style="[
                      item.style,
                      { color: item.map[v[item.key]].color },
                      { background: item.map[v[item.key]].background }
                    ]"
                  >
                    {{ item.map[v[item.key]].text }}
                  </span>
                </div>
              </div>
              <van-button
                v-if="dataObj.operate"
                :style="dataObj.operate.style"
                :type="dataObj.operate.btnType"
                :round="dataObj.operate.round"
                class="opreate"
                size="small"
                @click.stop="$emit(item.map[v[item.key]])"
              >
                {{ dataObj.operate.text }}
              </van-button>
            </div>
          </div>
        </template>
      </van-skeleton>
      <van-empty v-if="dataObj.data.length === 0 && domShowType" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'UtilList',
  props: {
    finishText: {
      type: String,
      default: '没有更多了'
    },
    totalCount: {
      type: Number,
      default: 0
    },
    operate: {
      type: String,
      default: ''
    },
    dataObj: {
      type: Object,
      require: true,
      default: () => {}
    },
    domShowType: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      curType: 0,
      loading: false,
      finished: false
    }
  },
  computed: {
    infoTextarr() {
      return this.dataObj.data.filter((v) => v.type !== 'img')
    },
    infoImgarr() {
      // this.$nextTick(() => {
      const imgkey = this.dataObj.dataMap.find((v) => v.type === 'img')
      var imgs = []
      if (this.dataObj.dataMap.length !== 0 && imgkey !== undefined) {
        imgs = this.dataObj.data.map((v) => {
          return v[imgkey.key]
        })
      }
      console.log(imgs)
      return imgs
      // })
    }
  },
  mounted() {},
  destroyed() {},
  activated() {},
  methods: {
    onLoad() {
      console.log('进来加载中,总条数为' + this.totalCount)
      this.$emit('loadData')
      this.loading = false
      if (this.dataObj.data.length > this.totalCount) {
        this.finished = true
      }
    },
    initConfig(val = '') {
      if (val !== '') {
        this[val] = false
      } else {
        this.loading = false
        this.finished = false
      }
      this.$forceUpdate()
    },
    timeJq(time) {
      const arr = time.split(' ')[1]
      return arr.split('')
    },
    toDetail(item, type) {
      console.log(type)
      this.$emit('toDetail', Object.assign(item, { clickType: type, pageType: 'warning' }))
    }
    // operate (item, type) {
    //   this.$emit('operate', Object.assign(item, { operateType: type }))
    //   console.log(type)
    // }
  }
}
</script>
<style lang="scss" scoped>
.infoList {
  .skel {
    padding: 8px;
    background-color: #fff;
    border-radius: 8px;
  }
  .infoList-main {
    display: flex;

    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 12px;
    .ifm-left {
      padding: 0 5px;
      color: #fff;
      font-size: 12px;
      line-height: 17px;
      position: relative;
      text-align: center;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 8px;
        height: 114px;
        z-index: -1;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }
    .ifm-left-yjxx {
      background: #b15ef6;
    }
    .ifm-left-zlxx {
      background: #59c0fd;
    }
    .ifm-left-cjjl {
      background: #76d9a6;
    }
    .ifm-left-zdry {
      background: #ffd157;
    }
    .ifm-left-bjsc {
      background: #67dce2;
    }
    .ifm-right {
      display: flex;
      flex: 1;
      // @extend %justifyContentb;

      border-radius: 8px;
      background-color: #fff;
      padding: 8px 8px 8px 14px;
      position: relative;
      .ifm-img {
        height: 100px;
        margin-right: 10px;
      }
      .opreate {
        position: absolute;
        right: 10px;
        bottom: 10px;
      }
      .ifm-user {
        // width: 192px;
        color: #444;
        font-size: 12px;
        min-width: 0;
        h3 {
          font-size: 15px;
          line-height: 21px;
          margin-bottom: 5px;
        }
        p {
          margin-bottom: 3px;
          line-height: 17px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            color: #9e9e9e;
          }
        }
      }
      .ifm-time {
        width: 99px;
        background-color: #ecf7ff;
        border-radius: 5px;
        padding-top: 8px;
        box-sizing: border-box;
        position: relative;
        font-size: 12px;
        text-align: center;
        h3 {
          font-size: 12px;
          margin-bottom: 8px;
          color: #077fd4;
        }
        p {
          color: #85c9f9;
          margin-bottom: 3px;
          font-weight: bold;
          s {
            font-weight: normal;
            transform: scale(0.83);
            display: inline-block;
            width: 10px;
            color: white;
            padding: 1px 2px;
            background-color: #85c9f9;
            border-radius: 3px;
            text-decoration: none;
            &:first-child {
              margin-left: 0;
            }
          }
          i {
            font-style: inherit;
          }
        }
        > a {
          color: white;
          font-weight: bold;
          background: #179efe;
          height: 25px;
          line-height: 26px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 5px;
          background-color: #179efe;
          width: inherit;
        }
      }
    }
  }
}
</style>
