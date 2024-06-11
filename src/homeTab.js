import restaurantImage from './assets/restaurant-stock-1.jpg';
import restaurantInt from './assets/restaurant_int.webp'
import loadMenuTab from './menuTab';
import switchTab from './switchTabs';

function loadHomeTab() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Bob\'s Breakfast Cafe';

    const img = document.createElement('img');
    img.src = restaurantInt;
    img.alt = 'Decorated restaurant table';
    img.style.width = '300px'; 
    img.style.height = 'auto'; 

    // const greet = document.createElement('div');
    // greet.textContent = 'Welcome to Bob\'s Breakfast Cafe';

    const slogan = document.createElement('h2');
    slogan.textContent = 'Your morning starts here!';

    const menuButton = document.createElement('button');
    menuButton.textContent = 'View menu';
    menuButton.classList.add('menu-button');
    menuButton.addEventListener('click', () => switchTab(loadMenuTab));

    content.appendChild(headline);
    content.appendChild(slogan);

    content.appendChild(menuButton);
    content.appendChild(img);
    //content.appendChild(greet);

}

export default loadHomeTab;