import { homepage } from './pages/homepage.js';
import { menupage } from './pages/menupage.js';
import { aboutpage } from './pages/aboutpage.js';

// Setup navigation buttons
const initializeNavigation = (content) => {
  const homebtn = document.getElementById('homebtn');
  const menubtn = document.getElementById('menubtn');
  const aboutbtn = document.getElementById('aboutbtn');

  homebtn.addEventListener('click', () => {
    content.replaceChildren(homepage);
    console.log('homebtn clicked');
  });
  menubtn.addEventListener('click', () => {
    content.replaceChildren(menupage);
    console.log('menubtn clicked');
  });
  aboutbtn.addEventListener('click', () => {
    content.replaceChildren(aboutpage);
    console.log('aboutbtn clicked');
  });
};

const App = () => {
  const content = document.getElementById('content');
  content.replaceChildren(homepage); // Set the initial page to homepage
  initializeNavigation(content);
};

App();
