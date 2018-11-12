import {getServiceUrl, getServiceColor} from './services';
import '../scss/main.scss';

/** Event handlers */

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

var serviceTheme = (service) => {
  changeTheme(getServiceColor(service), 'white', '.3em solid white');
};

/** Event listeners */

document.getElementById('service').onchange = (e) => {
  let service = e.currentTarget.value;
  if (service !== 'default') {
    serviceTheme(service);
  } else {
    originalTheme();
  }
};

document.getElementById('goto').onclick = (e) => {
  e.preventDefault();
  let service = document.getElementById('service').value;
  if (service !== 'default') {
    window.location.href = getServiceUrl(service);
  } else {
    alert('Please select a valid service from the dropdown.');
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  let currentYear = new Date().getFullYear();
  document.getElementById('current-year').innerHTML = currentYear;
});
