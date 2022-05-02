// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?




let isAnagram = function(s, t) {
    let S=s.split('');
    let T=t.split('');
    if(S.length!==T.length){
        return false;
    }
    let smap=new Map();
    let tmap=new Map();
    for(let x of S){
        if(smap.has(x)){
        smap.set(x,smap.get(x)+1);
        }
        else{
            smap.set(x,1);
        }
    }
    for(let x of T){
        if(tmap.has(x)){
        tmap.set(x,tmap.get(x)+1);
        }
        else{
            tmap.set(x,1);
        }
    }
    console.log(tmap,'Tmap');
    console.log(smap,"Smap");
    for(let [k,v] of tmap){
        if(v!==smap.get(k)){
            return false;
        }
    }
    return true;
}






