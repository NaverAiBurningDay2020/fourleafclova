<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import router from "./router";
export default {
  name: "App",
  router,
  components: {
  },
  data() {
    return {
      //
    };
  }
};
</script>
