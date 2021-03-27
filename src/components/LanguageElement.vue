<template>
<h1>{{language.name}}</h1>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { langs } from "../stat";
@Options({
    props: {
        lang: String
    }
})
export default class LanguageElement extends Vue {
    lang!: string;
    readonly language = langs.get(this.lang);
}
</script>