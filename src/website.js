export class Website {
  constructor() {
    this.bodyStyle = document.body.style;
    this.paraNodes = document.querySelectorAll('p, h1, footer span');
    this.preNodes = document.getElementsByTagName('pre');
  }

  setTheme(theme) {
    this.bodyStyle.backgroundColor = theme.getBodyBgColor();
    this.paraNodes.forEach((node) => {
      node.style.color = theme.getParaColor();
    });
    this.preNodes.forEach((node) => {
      node.style.border = theme.getPreBorder();
      node.style.backgroundColor = theme.getPreBgColor();
    });
  }
}
