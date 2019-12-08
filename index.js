import bi18n from "./lib/bi18n";


const cfgDefault = {
  storeName: "bi18n",
  componentName: "bi18n"
};

export default {
  install (Vue, store, _cfg) {

    const cfg = typeof _cfg === "undefined"
      ? cfgDefault
      : { ...cfgDefault, ..._cfg };

    if (typeof store === "undefined") {
      throw new Error("bi18n depends on Vuex. Please pass a store into the plugin.");
    }

    store.registerModule(storeName);

    Vue.component(cfg.componentName, bi18n(Vue));
  }
};
