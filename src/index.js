import { Website } from './website';
import services from './services';
import '../styles/main.css';

// Website context
let website = new Website();

document.getElementById('service').onchange = (e) => {
  const service = e.currentTarget.value;
  let theme;
  if (service === 'default') {
    theme = services.getOriginalTheme();
  } else {
    theme = services.getServiceTheme(service);
  }
  website.setTheme(theme);
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
