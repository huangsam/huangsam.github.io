import services from './services';
import Website from './website';
import '../styles/main.css';

// Website context
let website = new Website();

document.getElementById('service').onchange = (e) => {
  const newService = e.currentTarget.value;
  website.setTheme(newService);
};

document.getElementById('goto').onclick = (e) => {
  e.preventDefault();
  const newService = document.getElementById('service').value;
  const allServices = services.getServices();
  if (allServices.includes(newService)) {
    window.location.href = services.getServiceUrl(newService);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').innerHTML = currentYear;
});
