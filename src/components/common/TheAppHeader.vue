<template>
  <div class="app-header">
    <v-btn
      class="app-header__button"
      fab
      small
      flat
      color="transparent"
      @click="toggledleSideMenu">
      <span :class="toggleMenuIcon"/>
    </v-btn>
    <div>
      <img
        class="app-header__logo"
        src="~@/assets/img/logo.svg"
        alt="DHC">
      <div class="app-header__view-name">
        Assets
      </div>
    </div>
    <v-btn
      class="app-header__button"
      fab
      small
      flat
      color="transparent">
      <span class="iconm-search"/>
    </v-btn>
  </div>
</template>

<script>
import eventBus from '../../helpers/eventBus';

export default {
  name: 'TheAppHeader',
  props: {
    drawer: {
      type: Boolean,
      required: true,
      vaidate() {
        return false;
      },
    },
  },
  computed: {
    toggleMenuIcon() {
      if (this.drawer) {
        return 'iconm-close';
      }
      return 'iconm-burger';
    },
  },
  methods: {
    toggledleSideMenu() {
      eventBus.$emit('toggle-side-menu');
    },
  },
};
</script>

<style scoped>

</style>
