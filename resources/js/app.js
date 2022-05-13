require("./bootstrap");
require("./plugins/vue-toastification");
import Vue from "vue";
import {
  App as InertiaApp,
  plugin as InertiaPlugin
} from "@inertiajs/inertia-vue";
import { Link } from "@inertiajs/inertia-vue";
import vuetify from "./plugins/vuetify";
import { InertiaProgress } from "@inertiajs/progress";
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use( CKEditor );
Vue.use(InertiaPlugin);
Vue.component("Link", Link);
Vue.component("ckeditor", CKEditor.component);
Vue.mixin({ methods: { route: window.route } });
const app = document.getElementById("app");

new Vue({
  vuetify,
  render: h =>
    h(InertiaApp, {
      props: {
        title: title => `${title} - My App`,
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: name => require(`./pages/${name}`).default
      }
    })
}).$mount(app);

InertiaProgress.init({ color: "#fff" });
