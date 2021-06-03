<template>
  <div style="background: #f3f3f3;">
    <infoList
      :dataObj="dataObj"
      :operate="pageObj.operate"
      :domShowType="domShowType"
      style="padding: 10px;"
      @toDetail="toDetail"
      @operateAction="pageObj.operateAction"
    />
  </div>
</template>

<script>
import infoList from '../../../packages/list-module/index'
export default {
  components: {
    infoList
  },
  data() {
    return {
      pageObj: {
        currentPage: 1,
        pageSize: 5,
        operate: 'yjSign',
        queryType: 1,
        total: 0,
        operateAction: (params) => {
          this.handleOperate[params.type](params.item)
        }
      },
      handleOperate: {
        yjSign: (item) => {
          console.log(item)
          this.$api.post('yujingSign', { id: item.id }).then((res) => {
            if (res.respResult === 1) {
              this.$toast({
                message: '签收成功'
              })
              // this.$router.push({ path: '/' })
            } else {
              this.$toast({
                message: res.msg
              })
            }
          })
        },
        yjFeedback: (item) => {
          this.$router.push({ path: '/yjFeedback', query: { id: item.id } })
        }
      },
      index: 1,
      isDownLoading: false, // 下拉刷新
      upFinished: false,
      isUpLoading: false,
      finishedText: '我是有底线的',
      // 筛选数据
      idCart: '',

      activeKey: 0, // 下拉款--选中
      drawOption: {
        // 下拉框-- 数据
        statusOption: ['所有', '签收', '未签收'],
        typeOption: ['不限', '类型', '类型']
      },
      selectObj: {
        list1: {
          type: 'static',
          value: 0,
          option: [
            { text: '所有', value: 0 },
            { text: '签收', value: 1 },
            { text: '未签收', value: 2 }
          ]
        },
        list2: {
          type: 'type',
          value: 0,
          option: [{ text: '不限', value: 0 }]
        }
      },
      // 列表数据
      dataObj: {
        avatarSize: {
          height: '100px'
        },
        // 数据源
        data: [
          {
            img: 'https://img01.yzcdn.cn/vant/empty-image-default.png',
            id: 'c35f6be2-f9de-4ca5-ab65-ba2fd4b3946a',
            fctp: '任务名称',
            at: '活动身份类型',
            ac: '活动号码',
            ceco: '管控对象身份证1111111111111111',
            nm: '管控对象姓名',
            actt: '活动类型',
            mdde: '预警模型名称',
            latm: '活动时间',
            uptm: '预警时间',
            desc: '预警详细信息',
            isSign: '是否签收',
            isFb: '是否反馈',
            isNeedFb: '是否需要反馈',
            status: 1
          },
          {
            img: 'https://img01.yzcdn.cn/vant/empty-image-default.png',
            id: 'c35f6be2-f9de-4ca5-ab65-ba2fd4b3946a',
            fctp: '任务名称',
            at: '活动身份类型',
            ac: '活动号码',
            ceco: '管控对象身份证',
            nm: '管控对象姓名',
            actt: '活动类型',
            mdde: '预警模型名称',
            latm: '活动时间',
            uptm: '预警时间',
            desc: '预警详细信息',
            isSign: '是否签收',
            isFb: '是否反馈',
            isNeedFb: '是否需要反馈',
            status: 2
          }
        ],
        // 数据映射
        dataMap: [
          { key: 'nm', label: '', type: 'title' },
          { key: 'ac', label: '活动号码' },
          { key: 'ceco', label: '身份证' },
          { key: 'actt', label: '预警类型' },
          { key: 'uptm', label: '预警时间' },
          { key: 'img', label: '', type: 'img' },
          {
            key: 'status',
            label: '',
            type: 'status',
            style: { bottom: 0, borderRadius: '3px', padding: '3px 5px' },
            map: {
              1: {
                color: 'red',
                background: '#000',
                text: '状态1'
              },
              2: {
                color: '#000',
                background: 'red',
                text: '状态2'
              }
            }
          }
        ],
        // 数据类型，用于左边框颜色
        dataType: 'yjxx',
        // 按钮操作
        operate: {
          text: '按钮',
          style: {
            top: '10px',
            right: 0,
            color: '#fff',
            background: 'red',
            padding: '0 15px'
          },
          round: true,
          btnType: 'info'
        }
      },
      isOnLoad: true,
      domShowType: true
    }
  },
  computed: {},
  created() {},
  mounted() {},
  destroyed() {},
  activated() {},
  methods: {
    tabChange(...params) {
      switch (params[0]) {
        case 0:
          this.pageObj = Object.assign(this.pageObj, {
            currentPage: 1,
            pageSize: 5,
            queryType: 1,
            operate: 'yjSign',
            total: 0
          })
          break
        case 1:
          this.pageObj = Object.assign(this.pageObj, {
            currentPage: 1,
            pageSize: 5,
            queryType: 3,
            operate: 'yjFeedback',
            total: 0
          })
          break
        case 2:
          this.pageObj = Object.assign(this.pageObj, {
            currentPage: 1,
            pageSize: 5,
            queryType: 4,
            operate: 'yjFeedback',
            total: 0
          })
          break

        default:
          break
      }
      console.log(this.pageObj)
    },
    // 预警信息回调
    toDetail(item) {
      this.$router.push({
        name: 'earlyWarning',
        query: {
          id: item.id
        }
      })
    },
    // 下拉刷新
    onDownRefresh() {
      // this.finishedText = ''
      this.index = 1
    },
    // 上拉加载
    onLoadList() {
      console.log('出发')
      this.isUpLoading = true
      this.index++
    },
    onSearch() {},
    change(res) {
      console.log(res)
    },
    open(res) {
      console.log(res)
    },
    onConfirm() {}
  }
}
</script>
<style lang="scss" scoped>
.earlyList {
  .nav {
    position: fixed;
    top: 46px;
    right: 0;
    left: 0;
    z-index: 99;
    .menu-body {
      display: flex;
      padding: 16px;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
    .select-btn {
      color: #5e5e5e;
      background-color: #f6f5f8;
    }
    .on-active-btn {
      color: #179efe;
      background-color: #ecf7ff;
    }
    .menu-foot {
      display: flex;
      padding: 16px;
      justify-content: space-between;
      .menu-foot-btn {
        width: 152px;
        height: 32px;
      }
      .menu-foot-reset {
        color: #42526e;

        background: #e3e9f2;
      }
      .menu-foot-search {
        color: #fff;

        background: linear-gradient(51deg, #2da3f7 7%, #0e6fff 137%);
      }
    }
  }
  .main {
    padding: 12px 9px 0;
    margin-top: 102px;
    p.conut {
      padding-bottom: 12px;
      font-size: 12px;
      color: #acacac;
      text-align: center;
    }
    .van-pull-refresh {
      min-height: calc(100vh - 160px);
    }
  }
}
</style>
