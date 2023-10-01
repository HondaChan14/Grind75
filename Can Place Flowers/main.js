// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const bedLength = flowerbed.length; // Get the length of the flowerbed array
    let remaining = n; // Initialize the remaining flowers to plant

    for (let i = 0; i < bedLength; i++) {
        // Check for special cases:
        // If the flowerbed array contains only one element [0], and we need to plant at least one flower
        if (bedLength === 1 && flowerbed[i] === 0) return true;
        // If we've planted all the required flowers (remaining === 0), we can stop and return true.
        if (remaining === 0) return true;

        const prev = flowerbed[i - 1]; // Get the previous element in the flowerbed
        const curr = flowerbed[i]; // Get the current element in the flowerbed
        const next = flowerbed[i + 1]; // Get the next element in the flowerbed

        // If we're at the beginning of the flowerbed array and the current and next elements are both empty (0),
        // we can plant a flower in the current position.
        if (i === 0 && curr === 0 && next === 0) {
            flowerbed.splice(i, 1, 1); // Plant a flower by updating the current element to 1
            remaining--; // Reduce the remaining flowers to plant
        // If we're at the end of the flowerbed array, and the previous and current elements are both empty (0),
        // we can plant a flower in the current position.
        } else if (i === bedLength - 1 && prev === 0 && curr === 0) {
            flowerbed.splice(i, 1, 1); // Plant a flower by updating the current element to 1
            remaining--; // Reduce the remaining flowers to plant
        // For all other positions, if the previous, current, and next elements are all empty (0),
        // we can plant a flower in the current position.
        } else if (prev === 0 && curr === 0 && next === 0) {
            flowerbed.splice(i, 1, 1); // Plant a flower by updating the current element to 1
            remaining--; // Reduce the remaining flowers to plant
        }
    }

    // After iterating through the flowerbed array, check if we've planted all the required flowers (remaining === 0).
    // If yes, return true; otherwise, return false.
    return remaining === 0;
}
