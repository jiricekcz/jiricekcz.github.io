<template>
  <div>
    <LanguageElement v-for="(lang, index) in langs" v-bind:index="index" v-bind:lang="lang" v-bind:key="lang"/>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import LanguageElement from "./LanguageElement.vue";
import { langs } from "../stat";
@Options({
  components: {
    LanguageElement,
  },
})
export default class Languages extends Vue {
  readonly langs = langs;
}
</script>