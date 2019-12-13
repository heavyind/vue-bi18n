import { cfgDefault } from "../util/config";


export const createBi18nMixin = (_cfg) => {

  const cfg = { ...cfgDefault, ..._cfg };

  return {
    computed: {
      [cfg.scopeName] () {
        return {
          language: this.$store.state[cfg.storeName].language,
          languageIdx: this.$store.getters[`${cfg.storeName}/languageIdx`],
          languages: this.$store.state[cfg.storeName].languages,
          set: (l) => this.$store.dispatch(`${cfg.storeName}/set`, l),
          setByIdx: (i) => this.$store.dispatch(`${cfg.storeName}/setByIdx`, i)
        };
      }
    }
  };
};
