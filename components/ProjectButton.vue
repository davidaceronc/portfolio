<template>
  <v-btn class="project-button-container">
    <v-icon v-if='icon'>{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class ProjectButton extends Vue {
  @Prop({}) text = "";
  @Prop({}) icon = "";
}
</script>

<style scoped lang="scss">
.project-button-container {
  min-width: 200px;
  //@media (max-width: 990px) {
  //  width: 100%;
  //}
}
</style>
