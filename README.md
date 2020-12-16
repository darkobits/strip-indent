<a href="#top" id="top">
  <img src="https://user-images.githubusercontent.com/441546/102346395-9df75680-3f53-11eb-9344-e37bc4530303.png" style="max-width: 100%;">
</a>
<p align="center">
  <a href="https://www.npmjs.com/package/@darkobits/strip-indent"><img src="https://img.shields.io/npm/v/@darkobits/strip-indent.svg?style=flat-square"></a>
  <a href="https://travis-ci.com/github/darkobits/strip-indent"><img src="https://img.shields.io/travis/com/darkobits/strip-indent?style=flat-square"></a>
  <a href="https://www.codacy.com/app/darkobits/strip-indent"><img src="https://img.shields.io/codacy/coverage/7107d25365a14f5e8fa80b8e4d3fc4ca.svg?style=flat-square"></a>
  <a href="https://david-dm.org/darkobits/strip-indent.svg?style=flat-square"></a>
  <a href="https://github.com/conventional-changelog/standard-version"><img src="https://img.shields.io/badge/conventional%20commits-1.0.0-027dc6.svg?style=flat-square"></a>
</p>

Normalizes whitespace in multi-line strings. Plays nice with ANSI escape sequences.

## Install

```
npm i @darkobits/strip-indent
```

## Use

```ts
import stripIndent from '@darkobits/strip-indent';

const str = `
  Lorem ipsum dolor amet hoodie kogi copper
  mug, whatever lomo shaman VHS try-hard
  kinfolk beard disrupt chartreuse etsy.
`;

stripIndent(str)

/*

`
Lorem ipsum dolor amet hoodie kogi copper
mug, whatever lomo shaman VHS try-hard
kinfolk beard disrupt chartreuse etsy.
`

*/
```

```ts
import stripIndent from '@darkobits/strip-indent';

const str = `
  Kogi cold-pressed sriracha bespoke,
  readymade kombucha pickled listicle tumblr
  tousled truffaut shoreditch pop-up brunch.
`;

stripIndent(str, {stripEmptyLeading: true})

/*

`Kogi cold-pressed sriracha bespoke,
readymade kombucha pickled listicle tumblr
tousled truffaut shoreditch pop-up brunch.
`

*/
```

```ts
import stripIndent from '@darkobits/strip-indent';

const str = `
  Kogi cold-pressed sriracha bespoke,
  readymade kombucha pickled listicle tumblr
  tousled truffaut shoreditch pop-up brunch.
`;

stripIndent(str, {stripEmptyLeading: true, stripEmptyTrailing: true})

/*

`Kogi cold-pressed sriracha bespoke,
readymade kombucha pickled listicle tumblr
tousled truffaut shoreditch pop-up brunch.`

*/
```

<a href="#top">
  <img src="https://user-images.githubusercontent.com/441546/102322726-5e6d4200-3f34-11eb-89f2-c31624ab7488.png" style="max-width: 100%;">
</a>
