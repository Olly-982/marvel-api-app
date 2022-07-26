export default function buildObject(array) {
  let obj = {};
  for (let i of array) {
    let key = Object.keys({ i })[i];
    obj[key] = i;
  }
  return obj;
}
