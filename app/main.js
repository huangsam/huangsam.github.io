import { getServiceUrl, getServiceColor } from './services';
import { originalTheme, serviceTheme } from './themes';
import '../scss/main.scss';

document.getElementById('service').onchange = (e) => {
  const service = e.currentTarget.value;
  if (service !== 'default') {
    const serviceColor = getServiceColor(service);
    serviceTheme(serviceColor);
  } else {
    originalTheme();
  }
};

document.getElementById('goto').onclick = (e) => {
  e.preventDefault();
  const service = document.getElementById('service').value;
  if (service !== 'default') {
    window.location.href = getServiceUrl(service);
  } else {
    alert('Please select a valid service from the dropdown.');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').innerHTML = currentYear;
});
