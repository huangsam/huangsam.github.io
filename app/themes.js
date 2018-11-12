var changeTheme = (bgColor, textColor, codeBorder) => {
  document.body.style.backgroundColor = bgColor;

  let textNodes = document.querySelectorAll('p, h1, footer span');
  for (let node of textNodes) {
    node.style.color = textColor;
  }

  let codeNodes = document.getElementsByTagName('pre');
  for (let node of codeNodes) {
    node.style.border = codeBorder;
  }
};

var originalTheme = () => {
  changeTheme('white', '', '');
};

var serviceTheme = (serviceColor) => {
  changeTheme(serviceColor, 'white', '.3em solid white');
};

module.exports = {
  originalTheme,
  serviceTheme
};
