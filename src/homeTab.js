import restaurantImage from './assets/restaurant-stock-1.jpg';

function loadHomeTab() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to My Restaurant';

    const img = document.createElement('img');
    img.src = restaurantImage;
    img.alt = 'Decorated restaurant table';
    img.style.width = '300px'; 
    img.style.height = 'auto'; 

    const description = document.createElement('p');
    description.textContent = 'Come experience the best dining in town! Our ' +
                                'restaurant offers a variety of exquisite ' + 
                                'dishes made from the freshest ingredients. ' +
                                'We take pride in providing excellent service ' + 
                                'and a cozy atmosphere.';

    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(description);
}

export default loadHomeTab;