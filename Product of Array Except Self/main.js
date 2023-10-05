// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// [1,2,3,4]
// 
var productExceptSelf = function(nums) {
    // store a product of the input array using reduce
    const product = nums.reduce((acc, cur) => acc * cur, 1)
    // Map the input arraay, divinding product by current value, store it as new array
    let result = nums.map((num, i) => {
        // If num is 0, get new product to avoid dividing by 0
        if(num ==0) {
            const numsExceptCurrent = nums.slice(0, i).concat(nums.slice(i+1, nums.length))
            return numsExceptCurrent.reduce((acc, cur) => acc * cur, 1);
        }
        return product / num
    })
    // return result array
    return result
}