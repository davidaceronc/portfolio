<template>
    <v-btn :icon='iconMode' :class="color" :style='{ minWidth: iconMode ? "" : "200px" }' @click='$emit("click")'>
        <v-icon v-if='icon' :class='iconMode ? "" : "mr-2"'>
            {{ icon }}
        </v-icon>
        <template v-if='!iconMode'>
            {{ text }}
        </template>
    </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component( {} )
export default class ProjectButton extends Vue {
    @Prop( { default: '' } ) text;
    @Prop( { default: '' } ) icon;
    @Prop( { default: 'primary' } ) color;
    @Prop( { type:Boolean, default: false } ) iconMode;

}
</script>

<style scoped lang="scss">
</style>
