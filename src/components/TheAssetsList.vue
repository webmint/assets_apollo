<template>
  <section class="assets-list">
    <AssetsListItem
      v-for="(asset, index) in assetsList"
      :key="index"
      :asset="asset"
    />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AssetsListItem from '@/components/AssetsListItem';

export default {
  name: 'TheAssetsList',
  components: {
    AssetsListItem,
  },
  computed: {
    ...mapState('assets', {
      assetsList: state => state.assetsList,
    }),
  },
  beforeMount() {
    this.fetchAssets();
  },
  methods: {
    ...mapActions('assets', [
      'fetchAssets',
    ]),
  },
};
</script>

<style scoped>

</style>
