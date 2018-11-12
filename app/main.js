import {getServiceUrl, getServiceColor} from './services';
import '../scss/main.scss';

/** Event handlers */

var changeTheme = (service) => {
  let color = getServiceColor(service);

  document.body.style.backgroundColor = color;

  document.querySelectorAll('p, h1, footer span').forEach(
    (el) => { el.style.color = 'white'; }
  );

  Array.from(document.getElementsByTagName('pre')).forEach(
    (el) => { el.style.border = '.3em solid white'; }
  );
};

var originalTheme = () => {
  document.body.style.backgroundColor = 'white';

  document.querySelectorAll('p, h1, footer span').forEach(
    (el) => { el.style.color = 'black'; }
  );

  Array.from(document.getElementsByTagName('pre')).forEach(
    (el) => { el.style.border = '.3em solid hsl(0, 0%, 33%)'; }
  );
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
