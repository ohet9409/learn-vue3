import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.provide("app-message", "appMessage 입니다.");
app.config.globalProperties.msg = "hello";
app.provide("msg", "hello msg");
app.mount("#app");

import "bootstrap/dist/js/bootstrap";
