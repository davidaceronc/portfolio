<template>
    <v-app class='main-container'>
        <v-parallax
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        >
            <div class='header-info'>
                <h1 class="text-h3 mb-4">
                    Hi, I'm David Alexander Ceron
                </h1>
                <h2 class="subheading">
                    I am a Software Developer
                </h2>
                <p>I'm very passionate about solving complex problems with technology and code.</p>
                <div class='header-links'>
                    <ProjectButton text="GitHub" icon="mdi-github" color='default' @click='goTo("https://github.com/davidaceronc")' />
                    <ProjectButton text="Linkedin" icon="mdi-linkedin" color='blue white--text' @click='goTo("https://www.linkedin.com/in/davidaceronc/")' />
                </div>
            </div>
        </v-parallax>
        <nuxt />
        <v-fab-transition>
            <v-btn
                v-show="showScrollTop"
                class='primary'
                dark
                fixed
                bottom
                right
                fab
                @click='scrollTop'
            >
                <v-icon>mdi-arrow-up-thick</v-icon>
            </v-btn>
        </v-fab-transition>
        <v-footer
            class='primary lighten-1'
            padless
        >
            <div class='footer-info'>
                <p>David Alexander Ceron @{{ new Date().getFullYear() }}</p>
                <ProjectButton icon-mode text="GitHub" icon="mdi-github" color='grey lighten-1 black--text' @click='goTo("https://github.com/davidaceronc")' />
                <ProjectButton icon-mode text="Linkedin" icon="mdi-linkedin" color='blue white--text' @click='goTo("https://www.linkedin.com/in/davidaceronc/")' />
            </div>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component( {
    components: {}
} )
export default class Layout extends Vue {
    showScrollTop: boolean = false;

    created () {
        window.addEventListener( 'scroll', this.handleScroll );
    }

    destroyed () {
        window.removeEventListener( 'scroll', this.handleScroll );
    }

    handleScroll () {
        this.showScrollTop = window.scrollY > 400;
    }

    goTo( link: string ) {
        window.open( link,'_blank' );
    }

    scrollTop () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}
</script>
<style lang="scss" scoped>
.main-container {
  max-width: 1366px;
  margin: auto;
  .header-info {
    padding: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-start;

    .header-links {
      margin-top: 30px;
      display: flex;
      flex-flow: column;
      gap: 15px;
      @media (min-width: 990px) {
        flex-flow: row;
      }
    }
  }

  .footer-info {
    color: white;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    p {
      margin: 0 10px;
    }
  }
}
</style>
