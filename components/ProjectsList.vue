<template>
  <div class="projects-list-container">
    <div>
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { Project } from "~/utils/interfaces";

@Component({ components: {} })
export default class ProjectsList extends Vue {
  @Prop({ required: true }) projects: Project[] = [];

  mounted() {
    console.log(this.projects);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$projects-spacing: 30px;
.projects-list-container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: $projects-spacing;
  padding: $projects-spacing;
}
</style>
