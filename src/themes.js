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

export const originalTheme = () => {
  setTheme('white', '', '');
};

export const customTheme = (customColor) => {
  setTheme(customColor, 'white', '.3em solid white');
};
