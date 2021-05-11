<template>
  <div>
    <component
      :is="compInput"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import UtilInput from './UtilInput'
import DateSelecter from './DateSelecter'
import UtilSelecter from './UtilSelecter'
// import UtilSelecterWithTip from "./UtilSelecterWithTip";
import UtilRadio from './UtilRadio'
import FileUpload from './FileUpload'
import PersonSelecter from './PersonSelecter'
import PlaceSelecter from './PlaceSelecter'
import ArrowField from './ArrowField'
// import RichText from "./RichText";
const inputMap = {
  UtilInput,
  DateSelecter,
  UtilSelecter,
  // UtilSelecterWithTip,
  UtilRadio,
  FileUpload,
  PersonSelecter,
  ArrowField,
  PlaceSelecter
  // RichText
}
export default {
  props: {
    name: {
      default: '',
      type: String
    }
  },
  computed: {
    compInput() {
      console.log(this.name)
      return inputMap[this.name]
    }
  },
  component: inputMap
}
</script>

<style></style>
