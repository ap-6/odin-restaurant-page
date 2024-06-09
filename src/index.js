import loadHomeTab from "./homeTab";
import loadMenuTab from "./menuTab";

const content = document.getElementById('content');

document.addEventListener('DOMContentLoaded', () => {
    loadHomeTab();
})

const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const contactTab = document.getElementById('contact-tab');

homeTab.addEventListener('click', () => switchTab(loadHomeTab));
menuTab.addEventListener('click', () => switchTab(loadMenuTab));

function switchTab(loadTab) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    loadTab();
}