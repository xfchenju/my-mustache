import parseTemplateToTokens from './parseTemplateToTokens';
import renderTemplate from './renderTemplate';

window.MY_TemplateEngine = {
  render(templateStr, data) {
    const tokens = parseTemplateToTokens(templateStr);
    const domStr = renderTemplate(tokens, data);
    return domStr;
  }
}