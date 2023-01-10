const getSum = require('./script');

describe('test getSum function', () => {
    it('should return 10', () => {
        const result = getSum(3, 7);

        expect(result).toBe(10);
    });
});