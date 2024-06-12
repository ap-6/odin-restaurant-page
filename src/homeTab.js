import loadMenuTab from './menuTab';
import switchTab from './switchTabs';

function loadHomeTab() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('homeContainer');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const headline = document.createElement('h1');
    headline.textContent = 'Bob\'s Breakfast Cafe';

    const slogan = document.createElement('h2');
    slogan.textContent = 'Your morning starts here!';

    const menuButton = document.createElement('button');
    menuButton.textContent = 'View menu';
    menuButton.classList.add('menu-button');
    menuButton.addEventListener('click', () => switchTab(loadMenuTab));

    overlay.appendChild(headline);
    overlay.appendChild(slogan);
    overlay.appendChild(menuButton);
    homeContainer.appendChild(overlay);

    content.appendChild(homeContainer);
}

export default loadHomeTab;