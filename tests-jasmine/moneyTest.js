import { formatCurrency } from "../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
        expect(formatCurrency(1789)).toEqual('17.89');
        expect(formatCurrency(655)).toEqual('6.55');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });
    
    it('rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });
});

