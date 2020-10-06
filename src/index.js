module.exports = function towelSort (matrix) {
    let result = [];
    let reverse = false;
    matrix && matrix.forEach((arr) => {
        result = reverse ? result.concat(arr.reverse()) : result.concat(arr);
        reverse = !reverse;
    });
  return result;
}
