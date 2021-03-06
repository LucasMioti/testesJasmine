//tdd
var isAnagram = require('../anagram');

describe('Teste anagram', function(){
    it('quando for verdadeiro "abc" e "cba"',function(){
        expect(isAnagram('abc','cba')).toEqual(true);
    })
    it('quando for verdadeiro "Amor" e "Roma"',function(){ 
        expect(isAnagram('Amor','Roma')).toEqual(true);
    })
    it('se é verdade que existem duas strings vazias',function(){
        expect(isAnagram('','')).toEqual(true);
    })
    it('é verdade quando "132" é igual "312"',function(){
        expect(isAnagram('132','312')).toEqual(true);
    })
    it('é verdade quando "0.12" é igual "102"',function(){
        expect(isAnagram(0.12,'012')).toEqual(true);
    })
    it('é verdade quando "012" não é igual "102"',function(){
        expect(isAnagram(012,102)).toEqual(false);
    })
})