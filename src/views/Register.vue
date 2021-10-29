<template>
  <v-card width="800" class="mx-auto mt-5 mb-5">
    <v-card-title>Regiser</v-card-title>
    <v-card-text>
      <v-form ref="registerForm" v-model="formValidity">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.firstName"
                label="First Name"
                :rules="nameRules"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.lastName"
                label="Last Name"
                :rules="nameRules"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="user.email"
                label="Email"
                :rules="emailRules"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="12" md="5">
              <v-text-field v-model="user.address" label="Address" />
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="user.zipCode" label="Zip Code" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="user.city" label="City" />
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field v-model="user.country" label="Country" />
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="user.birthday"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="user.birthday"
                    label="Birthday"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="user.birthday" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(user.birthday)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                label="Password"
                v-model="user.password"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                label="Confirm password"
                v-model="user.confirmPassword"
                :rules="confirmPasswordRule"
                :type="showConfirmPassword ? 'text' : 'password'"
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showConfirmPassword = !showConfirmPassword"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-switch
          :rules="termsAndConditionsRules"
          v-model="user.agreeTermsAndConditions"
          label="I agree to the terms and conditions"
        />
        <v-row>
          <v-col cols="12" md="4">
            <v-btn
              :disabled="!formValidity"
              type="submt"
              class="mr-4"
              color="primary"
              >Submit</v-btn
            >
          </v-col>
          <v-col cols="12" md="4">
            <v-btn color="warning" class="mr-4" @click="resetValidation"
              >Reset Validation</v-btn
            >
          </v-col>
          <v-col cols="12" md="4">
            <v-btn color="error" @click="resetForm">Reset Form</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      showPassword: false,
      showConfirmPassword: false,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        birthday: "",
        password: "",
        confirmPassword: "",
        agreeTermsAndConditions: false,
      },
      formValidity: false,
      nameRules: [
        (value) => !!value || "Name is required",
        (value) => value.length > 1 || "Name should be longer than one letter",
      ],
      emailRules: [
        (value) => !!value || "Email is Required",
        (value) => value.includes("@") || "Email shoudl include an @",
        (value) => value.indexOf("@") !== 0 || "Email requires a username",
        (value) =>
          value.indexOf(".") - value.indexOf("@") > 1 ||
          "Email requires a domain name",
        (value) =>
          value.indexOf(".") <= value.length - 3 ||
          "Email requires a domain extension",
        (value) =>
          value.indexOf("@") <= value.indexOf(".") - 3 ||
          "Email requires a domain extension",
      ],
      confirmPasswordRule: [
        (value) => value === this.user.password || "Password do not match",
      ],
      termsAndConditionsRules: [
        (value) => value || "Agree to terms and conditions",
      ],
    };
  },
  methods: {
    resetValidation() {
      this.$refs.registerForm.resetValidation();
    },
    resetForm() {
      this.$refs.registerForm.reset();
    },
  },
};
</script>

<style lang="scss" scoped></style>
