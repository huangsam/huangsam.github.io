const setTheme = (bgColor, textColor, codeBorder) => {
  document.body.style.backgroundColor = bgColor;

  const textNodes = document.querySelectorAll('p, h1, footer span');
  textNodes.forEach((node) => {
    const { style } = node;
    style.color = textColor;
  });

  const codeNodes = Array.from(document.getElementsByTagName('pre'));
  codeNodes.forEach((node) => {
    const { style } = node;
    style.border = codeBorder;
  });
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
