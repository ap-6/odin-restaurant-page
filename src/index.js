import loadHomeTab from "./homeTab";
import loadMenuTab from "./menuTab";
import loadContactTab from "./contactTab";
import switchTab from "./switchTabs";
import './normalize.css';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    loadHomeTab();
})

const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const contactTab = document.getElementById('contact-tab');

homeTab.addEventListener('click', () => switchTab(loadHomeTab));
menuTab.addEventListener('click', () => switchTab(loadMenuTab));
contactTab.addEventListener('click', () => switchTab(loadContactTab));