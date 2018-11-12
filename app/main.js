import {getServiceUrl, getServiceColor} from './services';
import '../scss/main.scss';

/** Event handlers */

var changeTheme = (service) => {
  let color = getServiceColor(service);

  document.body.style.backgroundColor = color;

  let textNodes = document.querySelectorAll('p, h1, footer span');
  for (let node of textNodes) {
    node.style.color = 'white';
  }

  let codeNodes = document.getElementsByTagName('pre');
  for (let node of codeNodes) {
    node.style.border = '.3em solid white';
  }
};

var originalTheme = () => {
  document.body.style.backgroundColor = 'white';

  let textNodes = document.querySelectorAll('p, h1, footer span');
  for (let node of textNodes) {
    node.style.color = 'black';
  }

  let codeNodes = document.getElementsByTagName('pre');
  for (let node of codeNodes) {
    node.style.border = '.3em solid hsl(0, 0%, 33%)';
  }
};

/** Event listeners */

document.getElementById('service').onchange = (e) => {
  let service = e.currentTarget.value;
  if (service !== 'default') {
    changeTheme(service);
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
