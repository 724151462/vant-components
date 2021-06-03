<template>
  <div class="hello">
    <UtilForm
      :formItem="formItem"
      @onSubmit="onSubmit"
    >
      <template slot="btn">
        <!-- //TODO position: fixed 有键盘出现，样式会出错 -->
        <div class="main-bottom">
          <van-button
            block
            class="btn"
            type="primary"
          >
            报 送
          </van-button>
        </div>
      </template>
    </UtilForm>
  </div>
</template>

<script>
// import { Button } from 'element-ui'
// import 'element-ui/lib/theme-chalk/button.css'
import UtilForm from '../../../packages/form-module/index'
export default {
  name: 'Form',
  components: { UtilForm },
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      formItem: {
        inputList: [
          {
            component: 'UtilInput',
            key: 'name'
          },
          {
            component: 'DateSelecter',
            key: 'cjdw'
          },
          {
            component: 'UtilRadio',
            key: 'qbmc'
          },
          {
            component: 'UtilInput',
            key: 'qbnr'
          }
          // {
          //   component: 'FileUpload',
          //   key: 'files'
          // }
        ],
        inputOption: {
          name: {
            label: '姓名',
            value: '',
            placeholder: '请输入采集人姓名',
            rules: [{ required: true, message: '请输入采集人姓名' }]
          },
          cjdw: {
            label: '采集单位',
            value: '',
            placeholder: '请输入采集单位',
            rules: [{ required: true, message: '请输入采集单位' }],
            timeType: 'datetime'
          },
          qbmc: {
            label: '情报名称',
            value: '',
            placeholder: '请输入情报名称',
            options: [{ label: '1', value: 1 }, { label: '2', value: 2 }]
          },
          qbnr: {
            label: '情报内容',
            value: '',
            type: 'textarea',
            placeholder: '请输入情报内容',
            rules: [{ required: true, message: '请输入情报内容' }]
          }
          // files: {
          //   label: '上传附件',
          //   pics: [
          //     { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
          //     // Uploader 根据文件后缀来判断是否为图片文件
          //     // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          //     {
          //       url:
          //         'data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAkAG8DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2mkZgqlmIAAySe1I7rGjO7BUUEszHAA9TXJ+I9a+1I9pZSK1uoDTzIcrgkADI7cjP/wCutG7IuUlFXZestflub+ZEgaaz8zakowG6ZOB/F+HIHWtaXUbaOVoFfzbgY/cRfM4z0yP4R05OByMmsu00ea3gDvJ5ahceRG+zYvUgyDknOCSNuT1yMAZhWTU76GWwiFnZ225BLAhzzknaAORk9OPvE+1CdtyU2lrub1zLKLd576YWdqBykbZkP1YdDz0XkEcNWNbajNcPJLYNcGORv+WkjTMQCQcKMhOcjqOntVa+C3usyQNNK9vCFYrLI215CABwfujkZx2DHvXSWelmyiRI7uRiAcuwyWzjk+p44z0AHvku3sPWT9DPg1qMOkd9LPaTMAQHwVBPY8cEZ5zx3zjBq4t0VsBd3NyYojyHWRHDLjhgQOQccY5II4GSA3UdFa/Jke4zKsbLHlBhSe/II/MHoPxyda+1XWoQafKA0UUbTssYY7gM4yfUgD6Fsc9xthKTirski1W9utixyMIzgoZAPMkwR8xAKgAkY5PPQA81JP4gurAotyiMHB2OV28j1wWGPcZ+nGKu2MF3ZQGOSxik5HzLJkt8o65HGBlQOeAOeaVrSymnE91ayxyhi3JYrnAHGOnQHjHc+tLXcEpW31LH9rW6Qo7spaQBkjjO9mUjg46/5A6nFZ95q13JexW9uBBE24u7IS4VQCcAj3xxnkGsNglprZks+IJoRcRZBDYAEmGUgEHK4xwRkfSp5dXtjrM/2oN5ajYrqd+MEk8HsSTj2x2olfYlyvo9Dqp7RriCS3a4kWJkUK0TFJVYE/NvB5/h4x2Ocg4q1XJ2+rRwXXlQ3Ie3kJZiysybduNoyeOx4yOuQSc1dPimyCuzLc+bHuX7OkeS/wAwG4Z7Y5HI4PTPSlqaPQ0TZWU0szhVnnjf/lpIXMT4DYGSdhwVPGOMe1c3NHJpFxcSXJni/ffaI5Y41cSn+7k8ZPzAZx94nI4NddMN6iIpIVkyrMjbSgwec5BHpxzkj6iB4N1w4inmjfAY8Eqck+vGeOg6cevJbqJq7Oee5vda3Wdk7PaKqiWUZAIHYFucnODknOB05zsW8ktpDHFHaSJEjEbQu7gDGB0x82Dk5zk+vDVW9gYz5jiVnZXSRUXzWLBVYkZ5IUBec4YAjI4UXOowzsJkjaNiSCQRs4AAGAcgnJyTnnGDnILDUbPuVJJI4dRlu0gldJtnmxlMMCvQrnjpjIOOoOarNeSXDytF50FvG28cYZFC8hVBYkkhuQOhACnGa0452mkdI3CMpz/x85yDk5wcnHJHb7pxwBTJ1ZUdp7NCqgl3Py9O5I/n/wDXwWBwT0JzvtWFw9zaM7lY3kcCMsNxCqDzn5nwB6t6nmG7t7n7at7Hb/vRGYnUPw65zweoIPPQ9qzorlpgZNHtriZ921is4Ea4B5yeCenA5+YdhWiNGkvIiuqXLyqxy0EbkIfqeCeintyD6nK6A1fczr7xQXl+xWtvN5zA58vDyDGcgAE4PHU9OuKs26+IrhTF5dvp0QwDI7edKT6gD5cYwvJzwfYnZtbO3sYBDawpFGOyjGTjGT6njqanosJLucT4g0eW0s4Lu5vXupy+yVtgRO5yqj7vT1Oa1P7C0+60aREjjgdJJMTADIwzYye4x69q0tZsZtR082sLRpvcb2fPCg549+lN03Ro9PjZWnlnZ12t5jfKRjH3fp65pW1I5fefYx/Duo6o8KwfZTPAuQszNtA/E9f511VAGBgdKKpKxcVZWAjIwelRpBHGwYKSw3YZiWI3HJAJ5xnHHTgDsKKKBklUdXvZLDTmuIlUuJIkwwyMNIqn9CaKKa3B7GHq2pyQojrDAZJZfK3sm4oCDnbk8fcXjpx0o8NQLrFnJdagz3DRy+Wsbt8nyjIO3pn5j+H0ooqeo9tjqERY0VEUKigBVUYAHoKdRRTEFFFFABRRRQAUUUUAf//Z',
          //       isImage: true
          //     }
          //   ]
          // }
          // isFeedback: {
          //   label: "是否需要回访",
          //   options: [
          //     { value: 1, label: "需要" },
          //     { value: 2, label: "不需要" }
          //   ],
          //   value: 1
          // },
          // loading: false
        }
      }
    }
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
