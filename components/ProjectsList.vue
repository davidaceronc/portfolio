<template>
    <div class="projects-list-container">
        <h1 class='primary--text text-h3 mb-1'>
            Portfolio
        </h1>
        <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import ProjectCard from "@/components/ProjectCard.vue";
import { Project } from "~/utils/interfaces";

@Component( { components: { ProjectCard } } )
export default class ProjectsList extends Vue {
    @Prop( { required: true } ) projects: Project[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$projects-spacing: 30px;
.projects-list-container {
  background-color: whitesmoke;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: $projects-spacing;
  padding: $projects-spacing;
}
</style>
