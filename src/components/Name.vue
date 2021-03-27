

<template>
  <div class="">
    <h1
      class="font-sans text-5xl text-bold subpixel-antialiased font-semibold tracking-wide leading-6 text-gray-400 mx-top-3"
    >
      Hello, my name is
      <span class="text-6xl text-yellow-600">{{ name }}</span
      >.
    </h1>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import {name } from "../stat";
@Options({
  props: {},
  components: {},
})
export default class Name extends Vue {
    readonly name = name;
}
</script>