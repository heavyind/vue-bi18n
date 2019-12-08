# Heavy Industries vue-bi18n

## What it is

Dead-simple internationalization for Vue applications. Yes, bi18n is a pun on *bilingual internationalization*. The plugin handles any number of languages, but practically speaking, the intended use case is for sites supporting at most two or three languages.

## Installation

Via npm:

```
$ npm install --save @heavyind/vue-bi18n
```

Via yarn:
```
$ yarn add @heavyind/vue-bi18n
```

Via unpkg:
```
<script src="https://unpkg.com/@heavyind/vue-bi18n"></script>
```

## Usage

Install the plugin and pass in a configuration object including your store and the list of languages you intend to support.

```
import bi18n from "@heavyind/vue-bi18n";

Vue.use(bi18n, cfg);
```

For this example, assume we want to support English and French via a `languages: ['en', 'fr']` property on our configuration object. Usage is as follows:

```
<bi18n>
  <template v-slot:en>Welcome</template>
  <template v-slot:fr>Bienvenue</template>
</bi18n>
```

The appropriate greeting will be output based on which language you have currently set. It defaults to `languages[0]`, which is, in this case, `'en'`. Changing the current language is supported via calling `this.bi18n.set` on any Vue component. To get the current language, access `this.bi18n.language`.

## Configuration

The basic configuration object looks like the following:
```
{ store: null
  languages: [],
  storeName: "bi18n",
  scopeName: "bi18n",
  componentName: "bi18n"
}
```

Both `store` and `languages` are mandatory. The `languages` property is recommended to be an array of common language shortcodes, like `['en', 'es', 'fr']`.

## API

A handful of conveniences are attached to your Vue components, scoped under `bi18n` by default (configurable by setting `scopeName` in your configuration object):

* `this.bi18n.language` The currently-set language
* `this.bi18n.languageIdx` The index of the currently-set language in the original `languages` array passed into your configuration object
* `this.bi18n.languages` The list of available languages, as passed into your original configuration object
* `this.bi18n.set(l: String)` Set the current language via a string
* `this.bi18n.setByIdx(i: Number)` Set the current language by index of the original `languages` array passed into your configuration object
