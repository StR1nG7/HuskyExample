const getSum = require('./script');

describe('test getSum function', () => {
    it('should return 10', () => {
        const result = getSum(3, 7);

        // встановлюємо невірну суму, щоб тест не пройшов
        expect(result).toBe(13);
    });
});