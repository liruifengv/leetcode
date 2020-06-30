var twoSum = function(nums, target) {
  let hashObj = {}
  let arr = []
  for(let i = 0; i <nums.length; i++) {
      const anthor_num = target - nums[i]
      if(hashObj[anthor_num] !== undefined){
          arr = [hashObj[anthor_num], i]
          break
      }
      hashObj[nums[i]] = i
  }
  return arr
};