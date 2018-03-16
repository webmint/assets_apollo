import graphqlClient from '../../helpers/graphql';
import graphqlQueries from '../../helpers/graphqlQueries';

// This should not be here, it's just for not to create another helper
const newAsset = {
  name: 'Apollo Unit new222',
  alert: 'None',
  dosing: '55',
  service: 'CDS',
  operator: 'Test operator',
  performance: 'N/A',
  distance: '0',
  level: '300',
  cds: 'N/A',
};

const state = {
  assetsList: [],
};

const getters = {};
const actions = {
  async fetchAssets({ commit }) {
    const response = await graphqlClient.query({
      query: graphqlQueries.assetsListQuery,
    });
    commit('SET_ASSETS', response.data.assets);
  },
  async createAsset({ commit }) {
    await graphqlClient.mutate({
      mutation: graphqlQueries.CREATE_ASSET,
      update: (store, { data: { createAsset } }) => {
        const data = store.readQuery({ query: graphqlQueries.assetsListQuery });
        commit('SET_ASSETS', data.assets);
        data.assets.unshift(createAsset);
        store.writeQuery({ query: graphqlQueries.assetsListQuery, data });
      },
      variables: {
        data: newAsset,
      },
    });
  },
  // Done this cause I've created to much new assets. It's working,
  // just commented.
  // async deleteAsset(context, payload) {
  //   await graphqlClient.mutate({
  //     mutation: graphqlQueries.DELETE_ASSET,
  //     variables: {
  //       where: {
  //         id: payload,
  //       },
  //     },
  //   });
  // },
};
const mutations = {
  SET_ASSETS(store, payload) {
    state.assetsList = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
