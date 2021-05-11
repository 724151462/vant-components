<template>
  <van-field
    name="uploader"
    :label="inputOption[formKey].label"
    class="mb-file-uploader"
  >
    <template #input>
      <!-- <div class="uploader-list">
        <div class="img-box" v-for="(item,keys) of inputOption[formKey].pics" :key="keys">
          <div class="preview-delete">
            <img :src="deleteSrc" class="img-item"/>
          </div>
          <img :src="item.url" class="img-item"/>
        </div>
         <div @click="openFile" class="mb-file-button" >
         <img :src="cameraSrc" class="mb-camera"/>

       </div>
      </div> -->
      <!-- <van-uploader v-model="inputOption[formKey].pics" :after-read="afterRead"> -->
      <van-uploader
        v-model="inputOption[formKey].pics"
        :after-read="afterRead"
        :before-read="beforeRead"
        :show-upload="false"
        use-before-read
      />
      <div
        v-if="inputOption[formKey].pics.length < 3"
        class="mb-file-button"
        @click="openFile"
      >
        <img
          :src="cameraSrc"
          class="mb-camera"
        >
        <!-- <van-icon name="photo" style="margin:auto" /> -->
      </div>
    </template>
  </van-field>
</template>
<script>
import itemMixin from './itemMixin'
export default {
  mixins: [itemMixin],
  data() {
    return {
      cameraSrc: '',
      deleteSrc: ''
    }
  },
  mounted() {
    window.getAndroidImg = this.getAndroidImg // TODO  把本地方法挂载到window中,用于调用Android方法
    // eslint-disable-next-line no-undef
    android.goPrintLog('2')
  },
  methods: {
    async openFile() {
      // let params = {
      //   police_id: this.inputOption.jh,
      //   ywmk: "jqxz",

      //   imgBase64:
      //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAAwCAYAAAAFIcTMAAAE5klEQVR4nO1abU/iShR+AGFZdJVgI5psmmCIxoQPGzDyq+4PhejN/UCyWUPkprkJaCpBVlgFDXtm2kJpp1Beuk5u5vmgnc7bmfOct6nG8Nf7BF7EfA9+LOhailhgY739WN/E015lraDxq5xxlTUCxu4sHjhZUaKQmARIFHYrr/I/GpuqyJ4f54dyH8x3yKhO7d14xamidgyR2M5SbElF8anwbt2E0dME4jnrCrYNJa67v9cYJ573Yc4W1BdGHnvtuNCqpguENLW1LcO19iZEbgNB+wd5YdAaGyDuE2YbaWKpYl2sx0KysC2iPiKMeRFwlrjw7cT38P9B2HC6TQ8IOT42Iay4tEJEEHuGwodAkSERFBkSQZEhERQZEkGRIREUGRJBkSERFBkSQZEhERQZEkGRIREUGRJBkSERFBkSwf/fIX8EXfz4u4Xem9VKZAu4PMvx58fbf9CCPm27YTRu8JAqCPucNcdaBSWdDf6OWmco3n7nAMVyEYf4D436PQZznQlks5/Q64nnumXdNqIjw2zi+u4J78JOOvBpBVXNaj2a3WnPYPSO9L5z2HnSOIYt1Oot6zmTR7X0Vby/foGqHkZQJss3nHNZGDkmkKO5Z87+Bq3l9EeL6P7Sx8igcxS4BYaFx1IzB8iOxvhcvgA3drdnsPU7aVyWMn7C5hS8wn7TubSb4V2TC4STK0uWKPBBYSoAxk8MbGtniu8zDzFbaNdv0HbGzHlGmn7kcF5mnmQpFsd2mAoNgWf43jt9Pzc84GJES8bbE5qkyObCQbNDG/1XZI8vwA7eH2awX8pB12fxeWHOYETSr13eEIQ376489rOnd/TublC7c8njGsdyWHOkkYEsP+6miJYMlijJSlt3YxyJ3JslWTMJzbbK/mgPJ0N61/iCKo1nyq9586jbMxgcT+pbAwcdmtOnd+WKb5+iL2TmULoS5Rwi05i1EqkM23ilo6+D6MgYjsnmkoBWxBEp6OG2C33OosntqdrZpbBiKegrSmVwxTmepJcq4eIz5Y+HUQa7O6QwrYCkaeCHmeFxn1dXzjheYcGO+wu8h+WqNY+9CaL1jFSaK/qwlEefrLlh5Ox4zhRxb+WHhdpeEm7sEnXQeUKak0DKd3IIUzwsz4Rj5XoeWRrjGIaVayxYOariku8ZzGDaPaoH/xAzkZHx+PJK7p23W2T1V6AEeIPrlzy+PN+jl1pQls4hoDKyqzWmuF+k9BNSounkXqZMc4jEXsEXls61ewpZXTzS86FtFKxaY+AhrmPnk7JmVVpkMEVis1b/FGklxRDRDbwL85nuC2l3WCJCTg+AHhHxRgo+XkIEWXbD8Lwi672+7XoGkoJLnlxgsD0yOBIleuYdeEKbrz3E+O0Vv2wSWcisXlVwNGJ5yUSS3YXIYA7PvqF6msRD/TsM/4pbQzSewZThhAjedm7DrE6nPMDavIIJqNuHZL0jFoLIevXZzbzNlmAJvDEkJRVxKbxH2F5B1i224hy0PQNN8qx/X54xIA0kSJYe9ezuWyOEuUoL2m97iODSN7u1fia35woMvCnPLl1OqclzRGp212jbRczcZ4gpue4Q5vkcAgTP98jJ5vMStif+XuBGlJ9D1P/aSgT11VYiKDIkgiJDIigyJIIiQyIoMiSCIkMiKDIkgiJDIigyJIIiQyIoMiTCb0t1GrmtSBx0AAAAAElFTkSuQmCC",
      // };
      // let res = await base64zpSave(params);
      // console.log(res);
      // this.inputOption.pics.pics.push({
      //   url: params.imgBase64,
      //   isImage: true,
      //   picId: res.data.data.tpId,
      // });
      // eslint-disable-next-line no-undef
      android.goOpenCamera(this.inputOption.jh)
    },
    beforeRead(event) {
      // const { file, callback } = event.detail;
      // eslint-disable-next-line no-undef
      android.goOpenCamera()
      // callback(false);
    },
    afterRead(val) {
      // console.log(val);
      // let params = {
      //   police_id: this.inputOption.jh,
      //   imgBase64: val.content,
      //   // imgBase64:'121232'
      // };
      // try {
      //   base64zpSave(params).then((res) => {
      //     console.log("1");
      //     // eslint-disable-next-line no-undef
      //     android.goPrintLog("res" + res);
      //     console.log("2");
      //     this.inputOption.pics.pics.push({
      //       url: val.content,
      //       isImage: true,
      //       picId: res.data.data.tpId,
      //     });
      //     console.log("3");
      //   });
      // } catch (e) {
      //   console.log(e);
      // }

      console.log(this.inputOption.pics)
    },
    getAndroidImg(base64, id) {
      // console.log(val);
      // eslint-disable-next-line no-undef
      // android.goPrintLog(val);
      console.log('getAndroidImg')
      console.log(this.inputOption.pics)
      const params = {
        police_id: this.inputOption.jh,
        // ywmk: "jqxz",
        // imgBase64: val,
        imgBase64: 'fgdsgdfgdfgh'
        // imgBase64:'121232'
      }
      console.log('0')
      // console.log(params);
      // this.inputOption.pics.pics.push({ url: val, isImage: true, picId: "" });
      // alert(params);
      // eslint-disable-next-line no-undef
      android.goPrintLog('params' + params)

      this.inputOption.pics.pics.push({
        url: base64,
        isImage: true,
        picId: id
      })

      // try {
      //   this.inputOption.loading = true;
      //   base64zpSave(params)
      //     .then((res) => {
      //       console.log("1");
      //       // eslint-disable-next-line no-undef
      //       android.goPrintLog("res" + res);
      //       console.log("2");
      //       this.inputOption.loading = false;
      //       this.inputOption.pics.pics.push({
      //         url: val,
      //         isImage: true,
      //         picId: res.data.data.tpId,
      //       });
      //       console.log("3");
      //     })
      //     .catch((err) => (this.inputOption.loading = false));
      // } catch (e) {
      //   console.log(e);
      // }

      // console.log(this.inputOption.pics);
    }
  }
}
</script>
<style lang="scss" scoped>
// .upload-btn {
//   display: flex;
//   height: 150px;
//   width: 280px;
//   background: #fbfbfc;
//   border: 1px dashed #e7e7e7;
//   border-radius: 5px;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }
.button-file {
  position: absolute;
}
</style>

<style lang="scss">
.uploader-list {
  display: flex;
  flex-wrap: wrap;
}
.uploader-list > div {
  margin-bottom: 10px;
}
.img-box {
  width: 70px;
  height: 70px;
  position: relative;
}
.img-item {
  width: 80px;
  height: 80px;
  object-fit: fill;
}
.preview-delete {
  position: absolute;
  top: 0;
  right: 0;
  width: 14px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0 0 0 12px;
}
.mb-file-uploader {
  .van-field__control {
    display: flex;
    flex-wrap: wrap;
    // div {
    //   margin-bottom: 10px;
    // }
  }
  .van-uploader__preview-image {
    width: 70px;
    height: 70px;
  }
}
.mb-file-button {
  width: 70px;
  height: 70px;
  background-color: #f7f8fa;
  display: flex;
}
.mb-camera {
  width: 32px;
  height: 32px;
  margin: auto;
}
</style>
