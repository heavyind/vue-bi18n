import createBi18n from "./lib/bi18n";
import createStore from "./lib/store";
import e from "./util/e.js";


const cfgDefault = {
  store: null,
  languages: [],
  storeName: "bi18n",
  componentName: "bi18n"
};

export default {

  install (Vue, _cfg) {


    if (typeof _cfg === "undefined") { throw new Error(e.cfgUndefined); }

    if (typeof _cfg.store === "undefined") { throw new Error(e.cfgStoreUndefined); }

    if (typeof _cfg.languages === "undefined") { throw new Error(e.cfgLanguagesUndefined); }

    const cfg = { ...cfgDefault, ..._cfg };

    cfg.store.registerModule(cfg.storeName, createStore(cfg.languages));

    Vue.component(cfg.componentName, createBi18n(cfg));
  }
};
