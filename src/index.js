import services from './services';
import themes from './themes';
import '../styles/main.css';

document.getElementById('service').onchange = (e) => {
  const service = e.currentTarget.value;
  if (service !== 'default') {
    themes.customTheme(services.getServiceColors(service));
  } else {
    themes.originalTheme();
  }
};

document.getElementById('goto').onclick = (e) => {
  e.preventDefault();
  const service = document.getElementById('service').value;
  if (service !== 'default') {
    window.location.href = services.getServiceUrl(service);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').innerHTML = currentYear;
});
