const replaceNodeTheme = (node, themeA, themeB) => {
  if (themeA !== 'default') {
    node.classList.remove(themeA);
  }
  if (themeB !== 'default') {
    node.classList.add(themeB);
  }
};

export default class Website {
  constructor() {
    this.bodyNode = document.body;
    this.paraNodes = document.querySelectorAll('p, h1, footer span');
    this.preNodes = document.getElementsByTagName('pre');
    this.currentTheme = 'default';
  }

  setTheme(nextTheme) {
    replaceNodeTheme(this.bodyNode, this.currentTheme, nextTheme);

    this.paraNodes.forEach((node) => {
      replaceNodeTheme(node, this.currentTheme, nextTheme);
    });

    this.preNodes.forEach((node) => {
      replaceNodeTheme(node, this.currentTheme, nextTheme);
    });

    this.currentTheme = nextTheme;
  }
}
