<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      class="app-sidebar"
      app
      clipped
      height="83"
      light
      temporary>
      <TheSidebarMenu/>
    </v-navigation-drawer>
    <v-toolbar
      :color="appHeaderColor"
      app
      height="60">
      <TheAppHeader
        :drawer="drawer"
      />
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        class="pa-0">
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheAppHeader from './components/common/TheAppHeader';
import TheSidebarMenu from './components/common/TheSidebarMenu';
import eventBus from './helpers/eventBus';

export default {
  name: 'App',
  components: {
    TheAppHeader,
    TheSidebarMenu,
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    appHeaderColor() {
      if (!this.drawer) {
        return 'chambray';
      }
      return 'apple';
    },
  },
  mounted() {
    eventBus.$on('toggle-side-menu', () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>

<style>

</style>
