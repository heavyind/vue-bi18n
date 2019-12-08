


const cfgUndefined = "bi18n requires configuration. Please pass a configuration object as the second argument to `Vue.use` (e.g., `Vue.use(bi18n, cfg)`).";

const cfgStoreUndefined = "Your configuration object must include the Vuex store you intend to use (format `{ store: myStore }`).";

const cfgLanguagesUndefined = "Your configuration object must include the array of languages you intend to support. Recommended format uses string shortcodes (e.g., `{ languages: `['en', 'fr']`) }`";

const languageNotSupported = "The language you tried to set was not included in your configuration for @heavyind/vue-bi18n.";


export default {
  cfgUndefined,
  cfgStoreUndefined,
  cfgLanguagesUndefined,
  languageNotSupported
};
