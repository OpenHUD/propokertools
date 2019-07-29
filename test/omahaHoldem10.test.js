import omahaHoldem10 from '../src/omahaHoldem10.js';
import {expect} from 'chai';

describe('omahaHoldem10', () => {
    it ('correctly calculates (AK)(AK)', () => {
        // From [1]
        const {percentile} = omahaHoldem10({hand: ['As', 'Ks', 'Ah', 'Kh']});
        expect(percentile).to.equal(0.99986702373257);
    });

    it ('correctly calculates AA72', () => {
        // From [1]
        const {percentile} = omahaHoldem10({hand: ['As', 'Ah', '7c', '2d']});
        expect(percentile).to.equal(0.9675316280358297);
    });
});