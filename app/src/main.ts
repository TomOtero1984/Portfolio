import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/global.scss"
import clickOutside from './directives/clickOutside'

const app = createApp(App).use(router);
app.directive('click-outside', clickOutside);
app.mount("#app");
