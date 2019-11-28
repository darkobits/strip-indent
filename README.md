<a href="#top" id="top">
  <img src="https://user-images.githubusercontent.com/441546/62420419-b7da1700-b646-11e9-9d0d-c7aac9e2146d.png" style="max-width: 100%;">
</a>
<p align="center">
  <a href="https://www.npmjs.com/package/@darkobits/strip-indent"><img src="https://img.shields.io/npm/v/@darkobits/strip-indent.svg?style=flat-square"></a>
  <a href="https://github.com/darkobits/strip-indent/actions"><img src="https://img.shields.io/endpoint?url=https://aws.frontlawn.net/ga-shields/darkobits/strip-indent&style=flat-square"></a>
  <a href="https://www.codacy.com/app/darkobits/strip-indent"><img src="https://img.shields.io/codacy/coverage/7107d25365a14f5e8fa80b8e4d3fc4ca.svg?style=flat-square"></a>
  <a href="https://david-dm.org/darkobits/strip-indent.svg?style=flat-square"></a>
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/conventional%20commits-1.0.0-FB5E85.svg?style=flat-square"></a>
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

<a href="#top">
  <img src="https://user-images.githubusercontent.com/441546/69777002-41ac7380-1153-11ea-85a4-88184f8c9975.png" style="max-width: 100%;">
</a>
