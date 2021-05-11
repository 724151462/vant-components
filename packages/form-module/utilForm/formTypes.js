// class FormTypes{

// }
import { timeFormat } from './util'
const formTypes = (function(type) {
  var formType = {
    dealFeedback: function(params) {
      return {
        inputList: [
          {
            component: 'UtilInput',
            key: 'name'
          },
          {
            component: 'UtilInput',
            key: 'cjdw'
          },
          {
            component: 'UtilInput',
            key: 'qbmc'
          },
          {
            component: 'UtilInput',
            key: 'qbnr'
          },
          {
            component: 'FileUpload',
            key: 'files'
          }
        ],
        // 搜索的值
        inputOption: {
          // desc: {
          //   label: '处理反馈',
          //   value: '',
          //   placeholder: '反馈标题',
          //   rules: [{ required: true, message: '请输入反馈标题' }]
          // },
          // files: {
          //   label: ' ',
          //   files: [
          //     { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
          //     // Uploader 根据文件后缀来判断是否为图片文件
          //     // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          //     { url: 'https://cloud-image', isImage: true }
          //   ]
          // },
          // needFeedback: {
          //   label: '是否需要回访',
          //   options: [
          //     { value: 1, label: '需要' },
          //     { value: 2, label: '不需要' }
          //   ],
          //   value: 1
          // },
          // vip: {
          //   label: '重点人员',
          //   value: 1
          // }
        }
      }
    },
    distributionVisit: function(params) {
      return {
        inputList: [
          {
            component: 'UtilInput',
            key: 'xxcjRyxxRwszRwmc'
          },
          {
            component: 'UtilInput',
            key: 'xxcjRyxxRwszRwms'
          },
          {
            component: 'ArrowField',
            key: 'xxcjRyxxRwszRwcjdxid'
          },
          {
            component: 'ArrowField',
            key: 'xxcjRyxxRwszZxdxid'
          },
          {
            component: 'DateSelecter',
            key: 'xxcjRyxxRwszRwjssj'
          }
        ],
        inputOption: []
      }
    },
    assignVerify: function(params) {
      return {
        inputList: [
          {
            component: 'UtilInput',
            key: 'xxcjRyxxRwszRwmc'
          },
          {
            component: 'UtilInput',
            key: 'xxcjRyxxRwszRwms'
          },
          {
            component: 'UtilSelecter',
            key: 'xxcjRyxxRwszZxdx' // 接收人
          },
          {
            component: 'ArrowField',
            key: 'xxcjRyxxRwszRwcjdx' // 物流公司/网点
          },
          {
            component: 'DateSelecter',
            key: 'xxcjRyxxRwszRwjssj'
          }
        ],
        // 搜索的值
        inputOption: {
          xxcjRyxxRwszRwmc: {
            label: '任务标题',
            value: '',
            placeholder: '任务标题',
            rules: [{ required: true, message: '请输入任务标题' }]
          },
          xxcjRyxxRwszRwms: {
            label: '任务说明',
            value: '',
            placeholder: '任务说明',
            rules: [{ required: true, message: '请填写任务说明' }]
          },
          xxcjRyxxRwszRwcjdx: {
            label: '物流公司/网点',
            options: [{ value: 1, label: '请选择' }],
            placeholder: '请选择物流公司/网点',
            value: ''
          },
          xxcjRyxxRwszZxdx: {
            label: '接收人',
            options: [
              { value: 1, label: '请选择' },
              { value: 2, label: '张三' },
              { value: 3, label: '李四' }
            ],
            placeholder: '请选择接收人',
            value: ''
          },
          xxcjRyxxRwszRwjssj: {
            label: '完成期限',
            placeholder: '请选择完成期限',
            timeType: 'datetime',
            value: timeFormat(new Date())
          }
        }
      }
    }
  }
  return function getTypes(type, params) {
    return formType[type] && formType[type](params)
  }
})()

export { formTypes }
