<template>
  <div class="container">
    <p class="break-words text-mg text-left font-sans text-gray-400 font-semibold">
      I am a software developer from the Czech Republic.
      <br />
      <br />
      I mainly work with
      <span class="">
        {{ languages.mainString() }}
      </span>
      but have experience with other languages as well.
      <br />
      I satrted programming in the year
      {{ events.startedProgramming.year }} in {{ oldestLang.toString() }}. Since then I switched to
      mostly using {{ mostUsedLang.toString() }} and
      {{ secondMostUsedLang.toString() }}.
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { langs, events } from "../stat";

@Options({
  props: {},
  components: {},
})
export default class Description extends Vue {
  readonly languages = langs;
  readonly events = events;
  readonly oldestLang = this.languages.oldest();
  readonly mostUsedLang = this.languages.mostUsed();
  readonly secondMostUsedLang = this.languages.mostUsed(1);
}
</script>