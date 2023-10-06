// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // return true if there exists a triple of indices (i, j, k) 
 // such that i < j < k and nums[i] < nums[j] < nums[k]
 // Else return false
 
 var increasingTriplet = function(nums) {
    let first = Infinity,
        second = Infinity
        // [ infinity, infinity, 2] = false
        // [ 2, infinity, 2] = false
        // [ 1, inifinity, 1] = false
        // [ 1, 5, 5 ] = false
        // [ 0, 5, 0 ] = false
        // [ 0, 4, 4 ] = false
        // [ 0, 4, 6 ] = true

    for(let i = 0; i < nums.length; i++) {
        const third = nums[i]
        if(third <= first) {
            first = nums[i]
        }else if(third <= second) {
            second = nums[i]
        }else{
            return true
        }
    }
    return false
};