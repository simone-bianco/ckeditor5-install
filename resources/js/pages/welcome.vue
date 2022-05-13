<template>
  <guest-layout>
    <v-app-bar color="primary" :clipped-left="false" fixed dark app>
      <v-toolbar-title v-text="appName" />
      <v-spacer />
      <Link v-if="$page.props.auth.user" :href="route('home')">
        <v-btn text>Home</v-btn>
      </Link>
      <div v-else>
        <Link :href="route('login')">
          <v-btn text>Login</v-btn>
        </Link>
        <Link :href="route('register')">
          <v-btn text>Register</v-btn>
        </Link>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Welcome to Laravel Inertia Vuetify</v-card-title>
          THERE SHOULD BE RENDERED MY COMPONENT //TODO::CKEDITOR5
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </v-card>
      </v-container>
    </v-main>
  </guest-layout>
</template>

<script>
import ApplicationLogo from '../components/ApplicationLogo.vue'
import GuestLayout from '../layouts/GuestLayout.vue'
import Editor from "ckeditor5-custom-build/src/ckeditor";

export default {

  components: { ApplicationLogo, GuestLayout },
  data() {
    return {
      editor: Editor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      },
    }
  },
  computed: {
    appName() {
      return this.$page.props.appName
    },
  },
}
</script>
