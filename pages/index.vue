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
    },head: {
        title: 'Portfolio - David Alexander Ceron',
        meta: [
            { hid: 'description', name: 'description', content: 'Portfolio by David Alexander Ceron' },
            { hid: 'og:title', property: 'og:title', content: 'Portfolio by David Alexander Ceron' },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Software Engineer Personal Portfolio by David Alexander Ceron'
            },
            { hid: 'og:url', property: 'og:url', content: 'http://david-personal-portfolio.s3-website-us-east-1.amazonaws.com' },
            { hid: 'og:image', property: 'og:image', content: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            { hid: 'twitter:title', name: 'twitter:title', content: ' Translate by Madrov' },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'Software Engineer Personal Portfolio by David Alexander Ceron'
            },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }
        ]
    }
} )
export default class ProjectsPage extends Vue {
    projects: Project[] = projects;
}
</script>

<style lang="scss">
</style>
