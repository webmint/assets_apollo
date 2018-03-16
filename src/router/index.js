import Vue from 'vue';
import Router from 'vue-router';
import TheAssetsList from '@/components/TheAssetsList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TheAssetsList',
      component: TheAssetsList,
    },
  ],
});
