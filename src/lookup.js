export default function lookup(dataObj, keyName) {
  console.log(dataObj, keyName)
  if (keyName === '.') {
    return dataObj;
  }
  if (keyName !== '.' && keyName.indexOf('.') > -1) {
    let keys = keyName.split('.')
    let temp = dataObj;
    console.log('keys', keys, temp)
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }
    return temp;
  }
  return dataObj[keyName];
}