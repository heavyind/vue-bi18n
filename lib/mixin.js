import { cfgDefault } from "../util/config";


export const createBi18nMixin = (_cfg) => {

  const cfg = { ...cfgDefault, ..._cfg };

  return {
    computed: {
      [cfg.mixinNamespace] () {
        return {
          language: this.$store.state[cfg.storeNamespace].language,
          languageIdx: this.$store.getters[`${cfg.storeNamespace}/languageIdx`],
          languages: this.$store.state[cfg.storeNamespace].languages,
          set: (l) => this.$store.dispatch(`${cfg.storeNamespace}/set`, l),
          setByIdx: (i) => this.$store.dispatch(`${cfg.storeNamespace}/setByIdx`, i)
        };
      }
    }
  };
};
