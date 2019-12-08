import e from "../util/e";


export default (languages) => {

  const state = {
    language: languages[0],
    languages: languages
  };

  const mutations = {
    _set (state, idx) {
      state.language = state.languages[idx];
    }
  };

  const actions = {
    set ({ commit, state }, l) {
      const idx = state.languages.indexOf(l);
      if (idx < 0) { throw new Error(e.languageNotSupported); }
      commit("_set", idx);
    },

    setByIdx ({ commit }, idx) {
      commit("_set", idx);
    }
  };

  const getters = {
    languageIdx (state) {
      return state.languages.indexOf(state.language);
    }
  };

  return {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };
};
