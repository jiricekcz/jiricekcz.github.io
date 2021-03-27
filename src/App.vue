<template>
  <Welcome/>
  <Languages/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Welcome from './components/Welcome.vue';
import Languages from './components/Languages.vue';
import './index.css'
@Options({
  components: {
    Welcome,
    Languages
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
