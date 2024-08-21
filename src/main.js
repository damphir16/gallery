import { createApp } from "vue";
import App from "./App.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import "./index.css";

const app = createApp(App);
app.component("base-dialog", BaseDialog);
app.component("base-button", BaseButton);
app.mount("#app");
