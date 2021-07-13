<template>
    <div>
        <ProjectsList :projects="projects" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ProjectsList from "@/components/ProjectsList.vue";
import { projects } from "~/utils/projects";
import { Project } from "~/utils/interfaces";

@Component( {
    components: {
        ProjectsList,
    }
} )
export default class ProjectsPage extends Vue {
    projects: Project[] = projects;
}
</script>

<style lang="scss">
</style>
