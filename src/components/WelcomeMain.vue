

<template>
  <div class="container flex flex-col">
    <div class="py-6">
      <Name />
    </div>
    <div class="py-16">
      <Description />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Name from "./Name.vue";
import Description from "./Description.vue";
@Options({
  props: {},
  components: {
    Name,
    Description,
  },
})
export default class WelcomeLeft extends Vue {

}
</script>