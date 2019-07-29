# propokertools
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

[ProPokerTools hand rankings](https://pokercoder.blogspot.com/2012/03/6-handed-hand-orderings.html) calculator for various poker games, written in JavaScript.

### Usage
Install the library with `npm install propokertools`

```javascript
import {texasHoldem6, texasHoldem10, omahaHoldem6, omahaHoldem10} from 'propokertools';

console.log(texasHoldem6({hand: ['Ah', 'Ad']})); // <- {percentile: 1}
console.log(texasHoldem6({hand: ['7h', '2d']})); // <- {percentile: 0.01809954751131222}

console.log(texasHoldem10({hand: ['Ah', 'Ad']})); // <- {percentile: 1}
console.log(texasHoldem10({hand: ['7h', '2d']})); // <- {percentile: 0.00904977375565611}

console.log(omahaHoldem6({hand: ['As', 'Ks', 'Ah', 'Kh']})); // <- {percentile: 0.9999113491550466}
console.log(omahaHoldem6({hand: ['As', 'Ah', '7c', '2d']})); // <- {percentile: 0.9578908486471511}

console.log(omahaHoldem10({hand: ['As', 'Ks', 'Ah', 'Kh']})); // <- {percentile: 0.99986702373257}
console.log(omahaHoldem10({hand: ['As', 'Ah', '7c', '2d']})); // <- {percentile: 0.9675316280358297}
```

[downloads-image]: https://img.shields.io/npm/dm/propokertools.svg

[npm-url]: https://npmjs.org/package/propokertools
[npm-image]: https://img.shields.io/npm/v/propokertools.svg
