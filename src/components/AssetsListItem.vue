<template>
  <v-card class="asset">
    <v-card-title class="asset__title">
      <span class="iconm-wellhead asset__icon"/>
      {{ asset.name }}
    </v-card-title>
    <v-card-text class="asset__description">
      <v-container
        fluid
        class="pa-0">
        <v-layout
          wrap
          justify-space-between>
          <v-flex
            sm8
            md8
            xs12
            fill-height>
            <ul class="asset__properties">
              <li
                v-if="asset.alert && asset.alert.length"
                class="asset__properties-item">
                Alert: {{ asset.alert }}
              </li>
              <li
                v-if="asset.operator && asset.operator.length"
                class="asset__properties-item">
                Operator: {{ asset.operator }}
              </li>
              <li
                v-if="asset.service && asset.service.length"
                class="asset__properties-item">
                DHC Service: {{ asset.service }}
              </li>
              <li
                v-if="asset.cds && asset.cds.length"
                class="asset__properties-item">
                CDS: {{ asset.cds }}
              </li>
              <li
                v-if="asset.distance && asset.distance.length"
                class="asset__properties-item">
                Distance: {{ asset.distance }}
              </li>
              <li
                v-if="asset.performance && asset.performance.length"
                class="asset__properties-item">
                Performance score: {{ asset.performance }}
              </li>
            </ul>
          </v-flex>
          <v-flex
            sm4
            md4
            xs12
            d-flex
            align-end
            fill-height
            justify-end>
            <ul class="asset__stats">
              <li class="asset__stat">
                <div class="asset__stat-bar asset__stat-bar--level">
                  <div
                    :class="[levelBarColor, fullLevelBarRadius]"
                    :style="`width: ${levelBarWidth}%`"
                    class="asset__stat-inner-bar">&nbsp;</div>
                </div>
                <div class="asset__stat-label">Level</div>
              </li>
              <li class="asset__stat">
                <div class="asset__stat-bar asset__stat-bar--dosing">
                  <div
                    :class="dosingDotColor"
                    :style="`left: ${dosingDotPosition}%`"
                    class="asset__stat-inner-dot">&nbsp;</div>
                </div>
                <div class="asset__stat-label">Dosing</div>
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-container>
      <!--<v-btn-->
      <!--small-->
      <!--@click="deleteAsset">-->
      <!--Delete asset-->
      <!--</v-btn>-->
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AssetsListItem',
  props: {
    asset: {
      type: Object,
      required: true,
      vaidate() {
        return {};
      },
    },
  },
  data() {
    return {
      maxLevel: 550,
      maxDosing: 100,
    };
  },
  computed: {
    levelBarWidth() {
      return Math.round((parseInt(this.asset.level, 10) * 100) / this.maxLevel);
    },
    levelBarColor() {
      if (this.levelBarWidth >= 50) {
        return 'asset__stat-inner-bar--green';
      }
      return 'asset__stat-inner-bar--red';
    },
    fullLevelBarRadius() {
      if (this.maxLevel === parseInt(this.asset.level, 10)) {
        return 'asset__stat-inner-bar--full-radius';
      }
      return '';
    },
    dosingDotPosition() {
      return Math.round((parseInt(this.asset.dosing, 10) * 100) / this.maxDosing);
    },
    dosingDotColor() {
      if (this.dosingDotPosition >= 50) {
        return 'asset__stat-inner-dot--green';
      }
      return 'asset__stat-inner-dot--red';
    },
  },
  methods: {
    // Done this cause I've created to much new assets. It's working,
    // just commented.
    // deleteAsset() {
    //   this.$store.dispatch('assets/deleteAsset', this.asset.id);
    // },
  },
};
</script>

<style scoped>

</style>
