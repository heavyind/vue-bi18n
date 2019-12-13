import createBi18n from "./lib/bi18n";
import createStore from "./lib/store";
import { createBi18nMixin } from "./lib/mixin";
import { cfgDefault } from "./util/config";
import e from "./util/e.js";


export default {

  install (Vue, _cfg) {

    if (typeof _cfg === "undefined") { throw new Error(e.cfgUndefined); }

    if (typeof _cfg.store === "undefined") { throw new Error(e.cfgStoreUndefined); }

    if (typeof _cfg.languages === "undefined") { throw new Error(e.cfgLanguagesUndefined); }

    const cfg = { ...cfgDefault, ..._cfg };

    cfg.store.registerModule(cfg.storeNamespace, createStore(cfg.languages));

    Vue.component(cfg.componentName, createBi18n(cfg));

    if (cfg.mixin) {
      Vue.mixin(createBi18nMixin(cfg));
    }
  },

  createBi18nMixin
};
