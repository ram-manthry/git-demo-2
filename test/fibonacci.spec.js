const fibonacci = require('../fibonacciGenerator')
describe('fibonacci tests', function() {
    it('when 1 returns 1', function() {
        expect(fibonacci(1)).toBe(1)
    })
    it('when 5 returns 8', function() {
        const actual = fibonacci(5);
        expect(actual).toBe(8)
    })
})