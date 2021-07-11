<template>
  <v-btn class="primary project-button-container">
    <v-icon v-if='icon' class='mr-2'>
      {{ icon }}
    </v-icon>
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class ProjectButton extends Vue {
  @Prop({ default: '' }) text;
  @Prop({ default: '' }) icon;
}
</script>

<style scoped lang="scss">
.project-button-container {
  min-width: 200px!important;
  //@media (max-width: 990px) {
  //  width: 100%;
  //}
}
</style>
