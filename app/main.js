import {getServiceUrl, getServiceColor} from './services';
import {originalTheme, serviceTheme} from './themes';
import '../scss/main.scss';

/** Event listeners */

document.getElementById('service').onchange = (e) => {
  let service = e.currentTarget.value;
  if (service !== 'default') {
    let serviceColor = getServiceColor(service);
    serviceTheme(serviceColor);
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
