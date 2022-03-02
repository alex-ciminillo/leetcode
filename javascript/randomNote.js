// Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.



let canConstruct = function(ransomNote, magazine) {
    let mag=Array.from(magazine,String);
    let note=Array.from(ransomNote,String);
    console.log(mag,'mag');
    console.log(note,'note');
    let map=new Map();
    for(let x of note){
        if(map.has(x)){
        map.set(x,map.get(x)+1);
    }
    else{
        map.set(x,1);
    }
}
for(let x of note){
    if(mag.includes(x)){
        mag.splice(mag.indexOf(x),1);
        map.set(x,map.get(x)-1);
    }
    else{
        return false;
    }
}
for(let [k,v] of map){
    if(v>0){
        return false;
    }
} 
return true;
};














