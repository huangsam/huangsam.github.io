import services from './services';
import Website from './website';
import '../styles/main.css';

// Website context
let website = new Website();

document.getElementById('service').onchange = (e) => {
  const service = e.currentTarget.value;
  website.setTheme(service);
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
