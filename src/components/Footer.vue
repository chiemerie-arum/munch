<template>
  <v-footer color="secondary" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer-link`"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-col class="secondary py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Munch</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/",
        },
        {
          label: "Login",
          url: "/login",
        },
        {
          label: "Register",
          url: "/register",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
