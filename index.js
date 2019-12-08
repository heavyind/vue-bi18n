import createBi18n from "./lib/bi18n";
import createStore from "./lib/store";
import e from "./util/e.js";


const cfgDefault = {
  store: null,
  languages: [],
  storeName: "bi18n",
  scopeName: "bi18n",
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

    Vue.mixin({
      computed: {
        [cfg.scopeName] () {
          return {
            language: this.$store.state[cfg.storeName].language,
            languageIdx: this.$store.getters[`${cfg.storeName}/languageIdx`],
            set: (l) => this.$store.dispatch(`${cfg.storeName}/set`, l),
            setByIdx: (i) => this.$store.dispatch(`${cfg.storeName}/setByIdx`, i)
          };
        }
      }
    });
  }
};
