<template>
  <v-app>
    <ClickPosition />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import router from "./router";
import ClickPosition from "../src/components/ClickPosition";
export default {
  name: "App",
  router,
  components: {
    ClickPosition
  },
  data() {
    return {
      //
    };
  }
};
</script>