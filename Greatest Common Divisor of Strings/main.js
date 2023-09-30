// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

 // Str1 & Str2 can't have a common divisor if they're not reversable when concatenated
 // If str1 + str2 != str2 + str1 return '' because there is no divisor

 // Store the lengths of each input string
 // Find the gcd of the lengths and store that as the divisor
 // Return the first string sliced from 0 to divisor
 var gcd = function(a, b) {
    if (!b) return a;
    return gcd(b, a % b)
  };
  
  var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 != str2 + str1) return '';
  
    const length1 = str1.length,
          length2 = str2.length,
          divisor = gcd(length1, length2);
  
    return str1.slice(0, divisor)
  }