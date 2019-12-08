

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
        return this.$store.state[cfg.storeName]["language"];
      },
      languages () {
        return this.$store.state[cfg.storeName]["languages"];
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
