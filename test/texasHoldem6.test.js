import texasHoldem6 from '../src/texasHoldem6.js';
import {expect} from 'chai';

describe('texasHoldem6', () => {
    it ('correctly calculates AA', () => {
        const {percentile} = texasHoldem6({hand: ['Ad', 'Ac']});
        expect(percentile).to.equal(1);
    });

    it ('correctly calculates 72o', () => {
        const {percentile} = texasHoldem6({hand: ['7d', '2c']});
        expect(percentile).to.equal(0.01809954751131222);
    });
});