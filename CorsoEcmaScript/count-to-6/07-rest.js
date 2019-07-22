
module.exports = function average(...nums) {
    return nums.reduce( (total, num) => total + num)/nums.length;
};