import { createApp } from "vue";
import "./styles/styles.css";
import "./styles/theme.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { setupListener } from "./CallbackListner";

import "mdui/mdui.css";

import "mdui/components/button";
import "mdui/components/circular-progress";
import "mdui/components/button-icon";
import "mdui/components/card";
import "mdui/components/linear-progress";
import "mdui/components/tabs";
import "mdui/components/tab";
import "mdui/components/tab-panel";
import "mdui/components/dropdown";
import "mdui/components/menu";
import "mdui/components/menu-item";
import "mdui/components/list";
import "mdui/components/list-item";
import "mdui/components/text-field";
import { i18n } from "./I18n";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(i18n);

setupListener();

app.mount("#app");
