import _ from 'lodash';
// BEGIN (write your solution here)
const getDiffGenerator = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const result = {};
  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result['+ ' + key] = data2[key];
    } else if (!Object.hasOwn(data2, key)) {
      result['- ' + key] = data1[key];
    } else if (data1[key] !== data2[key]) {
      result['- ' + key] = data1[key];
      result['+ ' + key] = data2[key];
    } else {
      result['  ' + key] = data1[key];
    }
  }
  console.log(result);
  return result;
};

export default getDiffGenerator;
