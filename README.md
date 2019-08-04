<a href="#top" id="top">
  <img src="https://user-images.githubusercontent.com/441546/62420419-b7da1700-b646-11e9-9d0d-c7aac9e2146d.png" style="max-width: 100%;">
</a>
<p align="center">
  <a href="https://www.npmjs.com/package/@darkobits/strip-indent.svg?style=flat-square"></a>
  <a href="https://travis-ci.org/darkobits/strip-indent.svg?style=flat-square"></a>
  <a href="https://www.codacy.com/app/darkobits/log"><img src="https://img.shields.io/codacy/coverage/7107d25365a14f5e8fa80b8e4d3fc4ca.svg?style=flat-square"></a>
  <a href="https://david-dm.org/darkobits/strip-indent.svg?style=flat-square"></a>
  <a href="https://github.com/conventional-changelog/standard-version"><img src="https://img.shields.io/badge/conventional%20commits-1.0.0-027dc6.svg?style=flat-square"></a>
  <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-e271a5.svg?style=flat-square"></a>
</p>

> Normalizes whitespace in multi-line strings. Plays nice with ANSI escape sequences.

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

## &nbsp;
<p align="center">
  <br>
  <img width="24" height="24" src="https://cloud.githubusercontent.com/assets/441546/25318539/db2f4cf2-2845-11e7-8e10-ef97d91cd538.png">
</p>
