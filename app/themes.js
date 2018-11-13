const setTheme = (bgColor, textColor, codeBorder) => {
  document.body.style.backgroundColor = bgColor;

  const textNodes = document.querySelectorAll('p, h1, footer span');
  for (const node of textNodes) {
    node.style.color = textColor;
  }

  const codeNodes = document.getElementsByTagName('pre');
  for (const node of codeNodes) {
    node.style.border = codeBorder;
  }
};

const originalTheme = () => {
  setTheme('white', '', '');
};

const serviceTheme = (serviceColor) => {
  setTheme(serviceColor, 'white', '.3em solid white');
};

module.exports = {
  originalTheme,
  serviceTheme,
};
