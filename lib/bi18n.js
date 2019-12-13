

export default (cfg) => {
  return {
    props: {
      tag: {
        required: false,
        type: String,
        default: null
      }
    },
    computed: {
      language () {
        return this.$store.state[cfg.storeNamespace]["language"];
      },
      languages () {
        return this.$store.state[cfg.storeNamespace]["languages"];
      }
    },
    render (h) {
      if (this.tag !== null) {
        return h(this.tag, this.$slots[this.language]);
      } else {
        return this.$slots[this.language];
      }
    }
  };
};
