// import context from '@/page/index/index'
export const operates = {
  zlSign: {
    text: '签收',
    action: function(item) {
      window.operateAction({ type: 'zlSign', item: item })
    }
  },
  zlFeedback: {
    text: '反馈',
    action: function(item) {
      window.operateAction({ type: 'zlFeedback', item: item })
    }
  },
  yjSign: {
    text: '签收',
    action: function(item) {
      console.log(item)
      window.operateAction({ type: 'yjSign', item: item })
    }
  },
  yjFeedback: {
    text: '反馈',
    action: function(item) {
      window.operateAction({ type: 'yjFeedback', item: item })
    }
  }
}
