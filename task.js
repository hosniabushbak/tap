function twoSum(nums, target) {
    let numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the numMap
        if (numMap[complement] !== undefined) {
            // Return the indices of the two numbers that add up to the target
            return [numMap[complement], i];
        }

        // If the complement is not in the numMap, add the current number to the map
        numMap[nums[i]] = i;
    }

    // If no solution is found, return an empty array or handle it as needed
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output should be [0, 1]
