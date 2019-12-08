


export default (languages) => {

  const state = {
    language: languages[0],
    languages: languages
  };

  const mutations = {
    _setLanguage (state, idx) {
      state.language = state.languages[idx];
    }
  };

  const actions = {
    setLanguage ({ commit }, idx) {
      commit("setLanguage", idx);
    }
  };

  return {
    namespaced: true,
    state,
    actions
  };
};
