function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}