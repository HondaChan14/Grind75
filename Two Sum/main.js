// https://leetcode.com/problems/two-sum

// **
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(nums, target) {
    let output = [];
    for(let i = 0; i < nums.length-1; i++) { //On
        for(let j = i+1; j < nums.length; j++ ){ //nLogn
            if(nums[i] + nums[j] === target){
            output.push(i)
            output.push(j)
            }
        }
    }
    return output
};

// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j <nums.length; j++){
//             if(nums[i] + nums[j] == target){
//                 return [i, j]
//             } 
//         }
//     }
// }

twoSum([0, 1, 4, 6], 6)