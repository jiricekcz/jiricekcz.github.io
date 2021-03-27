<template>
  <div> 
      <LanguageElement lang="C++"/>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import LanguageElement from "./LanguageElement.vue";
import {langs} from "../stat";
@Options({
    components: {
        LanguageElement
    }
})
export default class Languages extends Vue {
    readonly langs = langs;
}
</script>