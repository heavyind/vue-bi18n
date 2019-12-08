# Heavy Industries vue-bi18n

## What it is

Internationalization that's as simple as typing static HTML.


## Installation

Install the package:

```
$ npm install --save @heavyind/vue-bi18n
```

Install the plugin and pass in a configuration object:

```
import bi18n from "@heavyind/vue-bi18n";

Vue.use(bi18n, cfg);
```

## Usage

Assuming configuration object supports English and French, usage is dead simple:

```
<bi18n>
  <template v-slot:en>Welcome</template>
  <template v-slot:fr>Bienvenue</template>
</bi18n>
```

The appropriate greeting will be output based on which language is set as default your Vuex store.

## Configuration

The basic configuration object looks like the following:
```
{ store: null
  languages: [],
  storeName: "bi18n",
  componentName: "bi18n"
}
```

Both `store` and `languages` are mandatory. The `languages` property is recommended to be an array of common language shortcodes, like `['en', 'es', 'fr']`.

## FAQ

* Can I use more than two languages?

You can use as many as you'd like, but the most practical application is likely to be for supporting a limited number of languages (two or three). Much more and you'd have a mess!


