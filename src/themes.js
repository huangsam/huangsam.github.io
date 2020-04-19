const customParaColor = 'white';
const customPreBgColor = '#252525';
const customPreBorder = '.3em solid white';

const setTheme = (colors) => {
  document.body.style.backgroundColor = colors.bodyBgColor;

  const paraNodes = document.querySelectorAll('p, h1, footer span');
  paraNodes.forEach((node) => {
    const { style } = node;
    style.color = colors.paraColor;
  });

  const preNodes = Array.from(document.getElementsByTagName('pre'));
  preNodes.forEach((node) => {
    const { style } = node;
    style.border = colors.preBorder;
    style.backgroundColor = colors.preBg;
  });
};

export const originalTheme = () => {
  const originalColors = {
    bodyBgColor: 'white',
    paraColor: '',
    preBgColor: '',
    preBorder: '',
  };
  setTheme(originalColors);
};

export const customTheme = (customColors) => {
  customColors.paraColor = customParaColor;
  customColors.preBgColor = customPreBgColor;
  customColors.preBorder = customPreBorder;
  setTheme(customColors);
};

export default { originalTheme, customTheme };
