import { getServiceUrl, getServiceColor } from './services';
import { originalTheme, customTheme } from './themes';
import '../styles/main.css';

document.getElementById('service').onchange = (e) => {
  const service = e.currentTarget.value;
  if (service !== 'default') {
    const serviceColor = getServiceColor(service);
    customTheme(serviceColor);
  } else {
    originalTheme();
  }
};

document.getElementById('goto').onclick = (e) => {
  e.preventDefault();
  const service = document.getElementById('service').value;
  if (service !== 'default') {
    window.location.href = getServiceUrl(service);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').innerHTML = currentYear;
});
