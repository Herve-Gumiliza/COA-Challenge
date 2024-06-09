function transform(str) {
    let x = str;
    const length = str.length;

    if (length % 3 === 0 && length % 5 === 0) {
        // Reverse the string
        x = str.split('').reverse().join('');
        // Replace each character with its ASCII code
        x = x.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Reverse the string
        x = str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        x = x.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return x;
}

// Example usage
const input = "Hello World";
const output = transform(input);
console.log(output);  // Output: "Hello"
