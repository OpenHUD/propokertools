import omahaHoldem6 from '../src/omahaHoldem6.js';
import {expect} from 'chai';

describe('omahaHoldem6', () => {
    it ('correctly calculates (AK)(AK)', () => {
        // From [1]
        const {percentile} = omahaHoldem6({hand: ['As', 'Ks', 'Ah', 'Kh']});
        expect(percentile).to.equal(0.9999113491550466);
    });

    it ('correctly calculates AA72', () => {
        // From [1]
        const {percentile} = omahaHoldem6({hand: ['As', 'Ah', '7c', '2d']});
        expect(percentile).to.equal(0.9578908486471511);
    });
});