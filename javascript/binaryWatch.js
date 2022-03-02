// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.
// For example, the below binary watch reads "4:51".
// Given an integer turnedOn which represents the number of LEDs that are currently on, return all possible times the watch could represent. You may return the answer in any order.

// The hour must not contain a leading zero.
// For example, "01:00" is not valid. It should be "1:00".
// The minute must be consist of two digits and may contain a leading zero.
// For example, "10:2" is not valid. It should be "10:02".
// Example 1:
// Input: turnedOn = 1
// Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
// Example 2:
// Input: turnedOn = 9
// Output: []
// Constraints:
// 0 <= turnedOn <= 10






const readBinaryWatch = turnedOn => {
    let ret = []
    function toTime(num) {
      const h = num >> 6
      const m = num & (~960)
      if ( h > 11 || m > 59) {
        return null
      }
      return h + ':' + String(m).padStart(2, '0')
    }
    function countBits(num) {
      let count = 0
      while (num) {
        (num & 1) && count++
        num >>= 1
      }
      return count
    }
    let i = 0
    while (i < 1024) {
      if (countBits(i) === turnedOn) {
        const time = toTime(i)
        time && ret.push(time)
      }
      i++
    }
    return ret;
  }










