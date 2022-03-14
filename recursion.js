
/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (nums.length === i) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, max = 0) {
  if (words.length === i) return max;


  if (words[i].length > max)
    return longest(words, i + 1, words[i].length);

  return longest(words, i + 1, max);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (i >= str.length) return "";

  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, low = 0, high = str.length - 1) {
  if (high < low) return true;
  

  if (str[low] === str[high]) return isPalindrome(str, low + 1, high - 1);

  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;

  return arr[i] === val ? i : findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
  if (i < 0) return "";

  return str[i] + revString(str, i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, output = [], vals = Object.values(obj)) {
  for (let val of vals) {
    if (typeof val === "object") gatherStrings(val, output);
    if (typeof val === "string") output.push(val);
  }

  return output;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(
  arr,
  target,
  low = 0,
  high = arr.length - 1,
  mid = Math.floor((low + high) / 2)
) {
  if (target < arr[low] || target > arr[high] || arr.length === 0 || low > high)
    return -1;
  if (arr[mid] === target) return mid;

  if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
  return binarySearch(arr, target, mid + 1, high);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
