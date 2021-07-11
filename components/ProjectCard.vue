<template>
  <div v-if="project" class="project-card-container">
    <div class="project-info">
      <h2>{{ project.name }}</h2>
      <div>
        <p>{{ project.description }}</p>
        <p>{{ project.value }}</p>
      </div>
      <p><strong>{{ project.technologies.join(' | ')}}</strong></p>
      <div class="project-links">
        <ProjectButton v-if='project.repository' text="Source Code" icon="mdi-iframe" @click='goTo(project.repository)' />
        <ProjectButton v-if='project.website' text="Website" icon="mdi-eye" @click='goTo(project.website)' />
      </div>
    </div>
    <div class="project-preview">
      <img class="image-preview" src="@/static/Translate.gif" alt="Translate" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import ProjectButton from "@/components/ProjectButton.vue";
import { Project } from "~/utils/interfaces";

@Component({ components: { ProjectButton } })
export default class ProjectCard extends Vue {
  @Prop({ required: true }) project: Project;

  mounted() {
    console.log(this.project);
  }

  goTo(link: string) {
    window.open(link,'_blank');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project-card-container {
  width: 100%;
  box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
  border-radius: 1em;
  overflow: hidden;

  display: flex;
  flex-flow: column-reverse;

  @media (min-width: 990px) {
    flex-flow: row;
  }

  &:hover {
    box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.3), 0 1em 2em rgba(0, 0, 0, 0.3);
    margin-top: -5px;
  }

  .project-info {
    width: 100%;
    padding: 30px;
    text-align: left;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    @media (min-width: 990px) {
      max-width: 480px;
    }
    h2 {
      font-size: 2.0em;
      //margin: 0 0 15px;
    }
    .project-links {
      display: flex;
      flex-flow: column;
      gap: 15px;
      @media (min-width: 990px) {
        flex-flow: row;
      }
    }
  }
  .project-preview {
    width: 100%;
    height: auto;
    background-color: bisque;
    display: flex;
    align-items: center;
    .image-preview {
      max-width: 100%;
    }
  }
}
</style>
