import texasHoldem10 from '../src/texasHoldem10.js';
import {expect} from 'chai';

describe('texasHoldem10', () => {
    it ('correctly calculates AA', () => {
        const {percentile} = texasHoldem10({hand: ['Ad', 'Ac']});
        expect(percentile).to.equal(1);
    });

    it ('correctly calculates 72o', () => {
        const {percentile} = texasHoldem10({hand: ['7d', '2c']});
        expect(percentile).to.equal(0.00904977375565611);
    });
});