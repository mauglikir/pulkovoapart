<script setup lang="ts">
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps';
import type { LngLat } from '@yandex/ymaps3-types';
import { ref } from 'vue';

const counter = ref(0);

// const produceAnAlert = () => {
//     alert(`${ ++counter.value } capybara`);
// };

const markers = [
    {
        coordinates: [30.328707, 59.831514] as LngLat,
        iconSrc:
            'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/yellow-capybara.png',
    },
    {
        coordinates: [30.328707, 59.831514] as LngLat,
        iconSrc:
            'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/purple-capybara.png',
    },
    {
        coordinates: [30.328707, 59.831514] as LngLat,
        iconSrc:
            'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/green-capybara.png',
    },
];

</script>

<template>
  <YandexMap
  :settings="{
    location: {
      center: [30.328707, 59.831514],
      zoom: 11,
      
    },
    showScaleInCopyrights: true,
  }"
  width="100%"
  height="350px"
>
  <YandexMapDefaultSchemeLayer />
  <YandexMapDefaultFeaturesLayer />
 <yandex-map-marker
        v-for="marker in markers"
        :key="marker.iconSrc"
        position="top-center left-center"
        :settings="{ coordinates: marker.coordinates }"
    >
        <img
            alt=""
            class="pin"
            :src="marker.iconSrc"
            
        >
    </yandex-map-marker>
</YandexMap>
</template>

<style scoped>
.pin {
  cursor: pointer;
  max-width: unset;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>