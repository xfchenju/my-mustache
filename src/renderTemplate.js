import lookup from './lookup';

export default function renderTemplate(tokens, data) {
  if (!tokens || !data) return '';
  console.log(tokens, data);
  let resultStr = '';
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token[0] === 'text') {
      resultStr += token[1];
    } else if (token[0] === 'name') {
      resultStr += lookup(data, token[1]);
    } else if (token[0] === '#') {
      let arrData = lookup(data, token[1]);
      for (let j = 0; j < arrData.length; j++) {
        // 根据data递归
        resultStr += renderTemplate(token[2], arrData[j]);
      }
    }
  }

  return resultStr;
}