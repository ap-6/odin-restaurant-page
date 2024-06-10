/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContactTab() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';

    const intro = document.createElement('p');
    intro.textContent = "We'd love to hear from you! Reach out to us using the following details:";

    const addressHeading = document.createElement('h2');
    addressHeading.textContent = 'Address';

    const address = document.createElement('p');
    address.textContent = '123 Breakfast Blvd, Foodie City, FC 45678';

    const phoneHeading = document.createElement('h2');
    phoneHeading.textContent = 'Phone';

    const phone = document.createElement('p');
    phone.textContent = '(123) 456-7890';

    const emailHeading = document.createElement('h2');
    emailHeading.textContent = 'Email';

    const email = document.createElement('p');
    email.textContent = 'contact@bobsbreakfastcafe.com';

    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = 'Opening Hours';

    const hoursWeekday = document.createElement('p');
    hoursWeekday.textContent = 'Monday - Friday: 7am - 3pm';

    const hoursWeekend = document.createElement('p');
    hoursWeekend.textContent = 'Saturday - Sunday: 8am - 4pm';

    content.appendChild(headline);
    content.appendChild(intro);
    content.appendChild(addressHeading);
    content.appendChild(address);
    content.appendChild(phoneHeading);
    content.appendChild(phone);
    content.appendChild(emailHeading);
    content.appendChild(email);
    content.appendChild(hoursHeading);
    content.appendChild(hoursWeekday);
    content.appendChild(hoursWeekend);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactTab);

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_restaurant_stock_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant-stock-1.jpg */ "./src/assets/restaurant-stock-1.jpg");


function loadHomeTab() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to My Restaurant';

    const img = document.createElement('img');
    img.src = _assets_restaurant_stock_1_jpg__WEBPACK_IMPORTED_MODULE_0__;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeTab);

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadMenuTab() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const headline = document.createElement('h1');
    headline.textContent = 'Menu';

    const menuItems = [
        { name: 'Pancakes with Maple Syrup', price: '$10', description: 'Fluffy pancakes served with pure maple syrup.' },
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
    })

    content.appendChild(headline);
    content.appendChild(menu);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuTab);

/***/ }),

/***/ "./src/assets/restaurant-stock-1.jpg":
/*!*******************************************!*\
  !*** ./src/assets/restaurant-stock-1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0144b66990db401f171a.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTab */ "./src/homeTab.js");
/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuTab */ "./src/menuTab.js");
/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactTab */ "./src/contactTab.js");




const content = document.getElementById('content');

document.addEventListener('DOMContentLoaded', () => {
    (0,_homeTab__WEBPACK_IMPORTED_MODULE_0__["default"])();
})

const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const contactTab = document.getElementById('contact-tab');

homeTab.addEventListener('click', () => switchTab(_homeTab__WEBPACK_IMPORTED_MODULE_0__["default"]));
menuTab.addEventListener('click', () => switchTab(_menuTab__WEBPACK_IMPORTED_MODULE_1__["default"]));
contactTab.addEventListener('click', () => switchTab(_contactTab__WEBPACK_IMPORTED_MODULE_2__["default"]));

function switchTab(loadTab) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    loadTab();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNqRGlDOztBQUU5RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDJEQUFlO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUMxQjFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSwrR0FBK0c7QUFDekgsVUFBVSxpR0FBaUc7QUFDM0csVUFBVSw4R0FBOEc7QUFDeEgsVUFBVSw0R0FBNEc7QUFDdEgsVUFBVSwwR0FBMEc7QUFDcEgsVUFBVSw0R0FBNEc7QUFDdEgsVUFBVSxzRkFBc0Y7QUFDaEcsVUFBVSxnR0FBZ0c7QUFDMUcsVUFBVSx3RUFBd0U7QUFDbEYsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCb0M7QUFDQTtBQUNNOztBQUUxQzs7QUFFQTtBQUNBLElBQUksb0RBQVc7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsZ0RBQVc7QUFDN0Qsa0RBQWtELGdEQUFXO0FBQzdELHFEQUFxRCxtREFBYzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFRhYi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lVGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVUYWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRDb250YWN0VGFiKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuXG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW50cm8udGV4dENvbnRlbnQgPSBcIldlJ2QgbG92ZSB0byBoZWFyIGZyb20geW91ISBSZWFjaCBvdXQgdG8gdXMgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXRhaWxzOlwiO1xuXG4gICAgY29uc3QgYWRkcmVzc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFkZHJlc3NIZWFkaW5nLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJzEyMyBCcmVha2Zhc3QgQmx2ZCwgRm9vZGllIENpdHksIEZDIDQ1Njc4JztcblxuICAgIGNvbnN0IHBob25lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVIZWFkaW5nLnRleHRDb250ZW50ID0gJ1Bob25lJztcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lLnRleHRDb250ZW50ID0gJygxMjMpIDQ1Ni03ODkwJztcblxuICAgIGNvbnN0IGVtYWlsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZW1haWxIZWFkaW5nLnRleHRDb250ZW50ID0gJ0VtYWlsJztcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ2NvbnRhY3RAYm9ic2JyZWFrZmFzdGNhZmUuY29tJztcblxuICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG91cnNIZWFkaW5nLnRleHRDb250ZW50ID0gJ09wZW5pbmcgSG91cnMnO1xuXG4gICAgY29uc3QgaG91cnNXZWVrZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzV2Vla2RheS50ZXh0Q29udGVudCA9ICdNb25kYXkgLSBGcmlkYXk6IDdhbSAtIDNwbSc7XG5cbiAgICBjb25zdCBob3Vyc1dlZWtlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnNXZWVrZW5kLnRleHRDb250ZW50ID0gJ1NhdHVyZGF5IC0gU3VuZGF5OiA4YW0gLSA0cG0nO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnRybyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRyZXNzSGVhZGluZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBob25lSGVhZGluZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlbWFpbEhlYWRpbmcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnNIZWFkaW5nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvdXJzV2Vla2RheSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob3Vyc1dlZWtlbmQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdFRhYjsiLCJpbXBvcnQgcmVzdGF1cmFudEltYWdlIGZyb20gJy4vYXNzZXRzL3Jlc3RhdXJhbnQtc3RvY2stMS5qcGcnO1xuXG5mdW5jdGlvbiBsb2FkSG9tZVRhYigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIE15IFJlc3RhdXJhbnQnO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHJlc3RhdXJhbnRJbWFnZTtcbiAgICBpbWcuYWx0ID0gJ0RlY29yYXRlZCByZXN0YXVyYW50IHRhYmxlJztcbiAgICBpbWcuc3R5bGUud2lkdGggPSAnMzAwcHgnOyBcbiAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nOyBcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0NvbWUgZXhwZXJpZW5jZSB0aGUgYmVzdCBkaW5pbmcgaW4gdG93biEgT3VyICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdGF1cmFudCBvZmZlcnMgYSB2YXJpZXR5IG9mIGV4cXVpc2l0ZSAnICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNoZXMgbWFkZSBmcm9tIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cy4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdXZSB0YWtlIHByaWRlIGluIHByb3ZpZGluZyBleGNlbGxlbnQgc2VydmljZSAnICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbmQgYSBjb3p5IGF0bW9zcGhlcmUuJztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVUYWI7IiwiZnVuY3Rpb24gbG9hZE1lbnVUYWIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogJ1BhbmNha2VzIHdpdGggTWFwbGUgU3lydXAnLCBwcmljZTogJyQxMCcsIGRlc2NyaXB0aW9uOiAnRmx1ZmZ5IHBhbmNha2VzIHNlcnZlZCB3aXRoIHB1cmUgbWFwbGUgc3lydXAuJyB9LFxuICAgICAgICB7IG5hbWU6ICdGcmVuY2ggVG9hc3QnLCBwcmljZTogJyQ4JywgZGVzY3JpcHRpb246ICdDbGFzc2ljIEZyZW5jaCB0b2FzdCB3aXRoIGEgaGludCBvZiBjaW5uYW1vbi4nIH0sXG4gICAgICAgIHsgbmFtZTogJ0VnZ3MgQmVuZWRpY3QnLCBwcmljZTogJyQxMicsIGRlc2NyaXB0aW9uOiAnRW5nbGlzaCBtdWZmaW4gdG9wcGVkIHdpdGggcG9hY2hlZCBlZ2dzIGFuZCBob2xsYW5kYWlzZS4nIH0sXG4gICAgICAgIHsgbmFtZTogJ0JyZWFrZmFzdCBCdXJyaXRvJywgcHJpY2U6ICckOScsIGRlc2NyaXB0aW9uOiAnU3R1ZmZlZCB3aXRoIGVnZ3MsIGNoZWVzZSwgYW5kIHlvdXIgY2hvaWNlIG9mIG1lYXQuJyB9LFxuICAgICAgICB7IG5hbWU6ICdPbWVsZXR0ZSB3aXRoIENoZWVzZScsIHByaWNlOiAnJDgnLCBkZXNjcmlwdGlvbjogJ1RocmVlLWVnZyBvbWVsZXR0ZSB3aXRoIG1lbHRlZCBjaGVkZGFyIGNoZWVzZS4nIH0sXG4gICAgICAgIHsgbmFtZTogJ0JhZ2VsIHdpdGggQ3JlYW0gQ2hlZXNlJywgcHJpY2U6ICckNScsIGRlc2NyaXB0aW9uOiAnRnJlc2ggYmFnZWwgc2VydmVkIHdpdGggY3JlYW15IGNoZWVzZSBzcHJlYWQuJyB9LFxuICAgICAgICB7IG5hbWU6ICdGcmVzaCBGcnVpdCBTYWxhZCcsIHByaWNlOiAnJDcnLCBkZXNjcmlwdGlvbjogJ1NlYXNvbmFsIGZydWl0cyBzZXJ2ZWQgZnJlc2guJyB9LFxuICAgICAgICB7IG5hbWU6ICdBdm9jYWRvIFRvYXN0JywgcHJpY2U6ICckMTAnLCBkZXNjcmlwdGlvbjogJ1RvYXN0IHRvcHBlZCB3aXRoIHJpcGUgYXZvY2FkbyBhbmQgc3BpY2VzLicgfSxcbiAgICAgICAgeyBuYW1lOiAnQ29mZmVlJywgcHJpY2U6ICckMycsIGRlc2NyaXB0aW9uOiAnRnJlc2hseSBicmV3ZWQgaG90IGNvZmZlZS4nIH0sXG4gICAgICAgIHsgbmFtZTogJ09yYW5nZSBKdWljZScsIHByaWNlOiAnJDQnLCBkZXNjcmlwdGlvbjogJ0ZyZXNobHkgc3F1ZWV6ZWQgb3JhbmdlIGp1aWNlLicgfVxuICAgIF07XG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfSlcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51VGFiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBsb2FkSG9tZVRhYiBmcm9tIFwiLi9ob21lVGFiXCI7XG5pbXBvcnQgbG9hZE1lbnVUYWIgZnJvbSBcIi4vbWVudVRhYlwiO1xuaW1wb3J0IGxvYWRDb250YWN0VGFiIGZyb20gXCIuL2NvbnRhY3RUYWJcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbG9hZEhvbWVUYWIoKTtcbn0pXG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS10YWInKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS10YWInKTtcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC10YWInKTtcblxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRhYihsb2FkSG9tZVRhYikpO1xubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRhYihsb2FkTWVudVRhYikpO1xuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRhYihsb2FkQ29udGFjdFRhYikpO1xuXG5mdW5jdGlvbiBzd2l0Y2hUYWIobG9hZFRhYikge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGxvYWRUYWIoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=