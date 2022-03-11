import component from "./index.vue";
component.install = App => App.component(component.name, component);

export default component