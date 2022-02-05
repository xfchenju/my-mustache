import Scanner from "./Scanner";
import nestToken from './nestToken';

export default function parseTemplateToTokens(templateStr) {
  let tokens = [];

  const scanner = new Scanner(templateStr);
  let i = 0;
  let word = '';
  while (!scanner.eos()) {
    i++;
    if (i > 20) return;

    word = scanner.scanUntil('{{');
    if (word !== '') {
      tokens.push(['text', word]);
    }
    scanner.scan('{{');

    word = scanner.scanUntil('}}');
    if (word !== '') {
      if (word[0] === '#') {
        tokens.push(['#', word.substring(1)]);
      } else if (word[0] === '/') {
        tokens.push(['/', word.substring(1)]);
      } else {
        tokens.push(['name', word]);
      }
    }
    scanner.scan('}}');
  }

  return nestToken(tokens);
}