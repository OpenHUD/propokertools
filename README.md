# propokertools
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

[ProPokerTools hand rankings](https://pokercoder.blogspot.com/2012/03/6-handed-hand-orderings.html) calculator for various poker games, written in JavaScript.

### Usage
Install the library with `npm install propokertools`

```javascript
import {texasHoldem6, texasHoldem10, omahaHoldem6, omahaHoldem10} from 'propokertools';

console.log(texasHoldem6({hand: ['Ah', 'Ad']})); // <- {percentile: 1}
console.log(texasHoldem6({hand: ['7h', '2d']})); // <- {percentile: ?}

console.log(texasHoldem10({hand: ['Ah', 'Ad']})); // <- {percentile: 1}
console.log(texasHoldem10({hand: ['7h', '2d']})); // <- {percentile: ?}

console.log(omahaHoldem6({hand: ['As', 'Ks', 'Ah', 'Kh']})); // <- {percentile: ?}
console.log(omahaHoldem6({hand: ['As', 'Ah', '7c', '2d']})); // <- {percentile: ?}

console.log(omahaHoldem10({hand: ['As', 'Ks', 'Ah', 'Kh']})); // <- {percentile: ?}
console.log(omahaHoldem10({hand: ['As', 'Ah', '7c', '2d']})); // <- {percentile: ?}
```

[downloads-image]: https://img.shields.io/npm/dm/propokertools.svg

[npm-url]: https://npmjs.org/package/propokertools
[npm-image]: https://img.shields.io/npm/v/propokertools.svg
