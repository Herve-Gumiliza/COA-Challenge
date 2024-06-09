# Photo Gallery

## Overview

The Photo Gallery project showcases a responsive web gallery displaying images of various animals. The gallery adjusts seamlessly to different screen sizes and includes interactive hover effects that enhance user experience.

## Project Description

This project contains two main parts:

1. **UI Challenge**: A web page with a responsive gallery that adjusts to different screen sizes.
2. **Coding Challenges**: Solutions to two algorithmic problems.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/wildlife-photo-gallery.git

2. **Navigate to the project directory**:
   ```bash
   cd COA-take-home-challenge
   ```
3. **Open the `index.html` file in a web browser**.
4. **Browse through the photo gallery, hover over an image**


### Coding Challenges

### Challenge 1: Subarray with Target Sum

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

#### Example:
const a = [4, 2, 7, 1, 9, 5];
const b = 14;
console.log(add(a, b));  // Output: true

### Challenge 2: String Transformation

Given a string, transform it based on the following rules:

- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

#### Example:
const input = "Hello World";
const output = transform(input);
console.log(output);  // Output: "Hello"