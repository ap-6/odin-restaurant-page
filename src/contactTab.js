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

export default loadContactTab;