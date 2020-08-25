/*
Write a function that takes a string as input and reverse only the vowels of a string.
*/
var reverseVowels = function(s) {
    let map = new Map();
    s =s.split('');
    map.set('a').set('e').set('i').set('o').set('u').set('A').set('E').set('I').set('O').set('U');
    
    let start = 0;
    let end = s.length-1;
    
    while(start<end){
        if(map.has(s[start])&&map.has(s[end])){
            [s[start],s[end]]=[s[end],s[start]];
            start++;
            end--
        }else if(!map.has(s[start])){
            start++
        }else{
            end--;
        }
    }
    return s.join('');
};
