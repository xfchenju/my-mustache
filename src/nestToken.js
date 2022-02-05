/**
 * 处理tokens 将tokens中遍历的项合并等操作
 * @param {*} tokens 
 */
export default function nestToken(tokens) {
  const nestedToken = [];
  // 利用栈特性，将#的变量取出来
  const stack = []; 
  // ***重点是这个 利用的是js的数组是引用类型***
  let collector = nestedToken;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    switch(token[0]) {
      case '#':
        collector.push(token);
        stack.push(token);
        collector = token[2] = [];
        break;
      case '/':
        stack.pop();
        collector = stack.length ? stack[stack.length - 1][2] : nestedToken;
        break;
      default:
        collector.push(token);
    }
  }

  return nestedToken;
}