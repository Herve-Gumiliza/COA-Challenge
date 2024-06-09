function add(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        // Add the current element to the current sum
        currentSum += arr[i];

        // While current sum is greater than the target, remove elements from the start
        while (currentSum > target && start <= i) {
            currentSum -= arr[start];
            start++;
        }

        // Check if we have found the target sum
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Example usage
const a = [4, 2, 7, 1, 9, 5];
const b = 14;
console.log(add(a, b));  // Output: true
