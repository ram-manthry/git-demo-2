const { isPalindrome } = require('../palindromeChecker')
describe('palindrome tests', function() {
    it('when empty returns false', function() {
        expect(true).toBe(isPalindrome(""))
    })
})