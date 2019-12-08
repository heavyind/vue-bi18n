# Heavy Industries vue-bi18n

## What it is

Dead-simple internationalization for Vue applications. Yes, bi18n is a pun on *bilingual internationalization*. The plugin handles any number of languages, but practically speaking, the intended use case is for sites supporting at most two or three languages. Depends on Vuex.

## Installation

Via npm:

```
$ npm install --save @heavyind/vue-bi18n
```

Via yarn:
```
$ yarn add @heavyind/vue-bi18n
```

Via unpkg (exposed as `bi18n`):
```
<script src="https://unpkg.com/@heavyind/vue-bi18n"></script>
```

## Usage

**Note:** Component tag name, store name, and scope name are configurable. For the sake of examples throughout this document we will use the default, which is `bi18n` for all three. More information can be found under the Configuration heading below.

### Getting started

Install the plugin and pass in a configuration object including your store and the list of languages you intend to support.

```
import VueBi18nfrom "@heavyind/vue-bi18n";

Vue.use(VueBi18n, cfg);
```

For this example, assume we want to support English and French via a `languages: ['en', 'fr']` property on our configuration object. Usage is as follows:

```
<bi18n>
  <template v-slot:en>Hello, world.</template>
  <template v-slot:fr>Bonjour, le monde.</template>
</bi18n>
```

The appropriate greeting will be output based on which language you have currently set. It defaults to `languages[0]`, which is, in this case, `'en'`. Changing the current language is supported via calling `this.bi18n.set` on any Vue component: `this.bi18n.set('fr')`. To get the current language, access `this.bi18n.language`. More methods and accessors are described under the API heading below.

### Using custom tags

If you would like the content you pass into the `<bi18n>` component to render inside a particular tag, just pass its name in as a prop:

```
<bi18n tag="h1">
  <template v-slot:en>On the Internet, nobody knows you're a dog.</template> 
  <template v-slot:fr>Sur Internet, personne ne sait que tu es un chien.</template> 
</bi18n>
```
If you don't provide a custom tag, `<bi18n>` renders as a text node.

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

Both `store` and `languages` are mandatory. The `languages` property is recommended to be an array of common language shortcodes, like `['en', 'es', 'fr']`. Here's what they do:

`store`

Allows vue-bi18n to hook into your Vuex store.

`languages`

Lets the store know which languages you want to support.

`storeName`

Sets the namespace of the store module.

`scopeName`

Sets the name bound to `this` under which you can access API properties and methods. If you were to set this to `foo`, the API would be available under `this.foo` rather than `this.bi18n`.

`componentName`

Sets the name of the component. If you were to change this to `bar`, the component would be written `<bar>` rather than `<bi18n>`.



## API

`this.bi18n.language` *String*

The currently-set language

`this.bi18n.languageIdx` *Number*

The index of the currently-set language in the original `languages` array passed into your configuration object

`this.bi18n.languages` *Array<String>*

The list of available languages, as passed into your original configuration object

`this.bi18n.set` (*lang: String*)

Set the current language via a string

`this.bi18n.setByIdx` (*index: Number*)

Set the current language by index of the original `languages` array passed into your configuration object

---
**Note:** the namespace of the API on Vue components can be set within the configuration object by passing a value for `scopeName`.

## License

MIT
