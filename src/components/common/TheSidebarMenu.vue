<template>
  <div class="sidebar-menu">
    <v-list
      class="sidebar-menu__list"
      two-line>
      <v-list-tile
        class="sidebar-menu__list-tile"
        avatar
        @click="createAssetExtended">
        <v-list-tile-avatar>
          <img src="~@/assets/img/new-item.svg">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title class="sidebar-menu__list-tile-title">
            Create new Asset
          </v-list-tile-title>
          <v-list-tile-sub-title class="sidebar-menu__list-tile-subtitle">
            Add new asset
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider/>
    <div class="sidebar-menu__copyright">
      Dataharmonix © 2018 All rights reserved
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import eventBus from '../../helpers/eventBus';

export default {
  name: 'TheSidebarMenu',
  methods: {
    ...mapActions('assets', [
      'createAsset',
    ]),
    createAssetExtended() {
      this.createAsset();
      eventBus.$emit('toggle-side-menu');
    },
  },
};
</script>

<style scoped>

</style>
