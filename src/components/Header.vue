<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Munch</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="$vuetify.breakpoint.lgAndUp" text rounded to="/" class="mr-4"
        >Home</v-btn
      >
      <v-btn v-if="$vuetify.breakpoint.lgAndUp" text rounded to="/login"
        >Login</v-btn
      >
      <v-btn v-if="$vuetify.breakpoint.lgAndUp" text rounded to="/register"
        >Register</v-btn
      >
      <v-btn text rounded @click="toggleTheme">Toggle Theme</v-btn>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item to="/register">
            <v-list-item-icon>
              <v-icon>mdi-account-details</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div class="header pb-0">
      <h1>Order from 198 Countries</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style lang="scss" scoped>
.theme {
  width: 100px;
  option {
    font-size: 0.875rem;
    color: white;
  }
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/header.jpeg");
  height: 43vh;
  background-position: center;
  background-size: cover;
  color: #eee;
}
</style>
