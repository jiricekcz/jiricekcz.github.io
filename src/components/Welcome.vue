

<template>
  <container class="">
    <h1>
      Hello, my name is <span class="name">{{ name }}</span
      >.
    </h1>
    <h2>
      I am a software developer from the Czech Republic. I mainly work with
      <span class="language">
        {{ languages.mainString() }}
      </span>
      but have experience with other languages as well.
    </h2>
    <h3>I satrted programming in the year {{ events.startedProgramming.year }} in {{languages.timeSorted()[0].toString()}}. Since then I switched to mostly using {{ languages.mostUsed().toString()}} and {{ languages.mostUsed(1).toString()}}.
    </h3>
  </container>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { langs, events, name } from "../stat";

@Options({
  props: {
  },
})
export default class Welcome extends Vue {
  readonly languages = langs;
  readonly events = events;
  readonly name = name;
}
</script>
<style scoped>
container {
  width: 100%;
  height: 100%;
}

h1 {
  padding: 0;
  margin-top: 5%;
  position: relative;
  margin-left: 30%;
  text-align: left;
  color: gray;
}
.name {
  color: black;
}
</style>