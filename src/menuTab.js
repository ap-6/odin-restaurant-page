function loadMenuTab() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuItems = [
        { name: 'Pancakes', price: '$10', description: 'Fluffy pancakes served with pure maple syrup.' },
        { name: 'French Toast', price: '$8', description: 'Classic French toast with a hint of cinnamon.' },
        { name: 'Eggs Benedict', price: '$12', description: 'English muffin topped with poached eggs and hollandaise.' },
        { name: 'Breakfast Burrito', price: '$9', description: 'Stuffed with eggs, cheese, and your choice of meat.' },
        { name: 'Omelette with Cheese', price: '$8', description: 'Three-egg omelette with melted cheddar cheese.' },
        { name: 'Bagel with Cream Cheese', price: '$5', description: 'Fresh bagel served with creamy cheese spread.' },
        { name: 'Fresh Fruit Salad', price: '$7', description: 'Seasonal fruits served fresh.' },
        { name: 'Avocado Toast', price: '$10', description: 'Toast topped with ripe avocado and spices.' },
        { name: 'Coffee', price: '$3', description: 'Freshly brewed hot coffee.' },
        { name: 'Orange Juice', price: '$4', description: 'Freshly squeezed orange juice.' }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('price');
        itemPrice.textContent = item.price;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(itemDescription);

        menu.appendChild(menuItem);
    });
    
    content.appendChild(menu);
}

export default loadMenuTab;