const { isPalindrome } = require('../palindromeChecker')
describe('palindrome tests', function() {
    it('when empty return true', function() {
        expect(true).toBe(isPalindrome(""))
    })
})