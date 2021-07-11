<template>
  <v-app class='main-container'>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component( {
  components: {}
} )
export default class Layout extends Vue {
}
</script>
<style lang="scss" scoped>
.main-container {
  max-width: 1366px;
  margin: auto;
}
</style>
