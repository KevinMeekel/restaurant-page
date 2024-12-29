import friesImage from './fries.jpg';

export function initializeHome() {
    document.addEventListener('DOMContentLoaded', () => {
        
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';

        const heading = document.createElement('h1');
        contentDiv.appendChild(heading);
        heading.textContent = 'ONLYFRIES restaurant';

        const image = document.createElement('img');
        image.src = friesImage;
        contentDiv.appendChild(image);

        const paragraph = document.createElement('p');
        contentDiv.appendChild(paragraph);
        paragraph.textContent = 'Home ipsum, dolor sit amet consectetur adipisicing elit. Neque, eaque?';

        console.log('home content injected');
    });
}

export function populateHome() {
    const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';

        const heading = document.createElement('h1');
        contentDiv.appendChild(heading);
        heading.textContent = 'ONLYFRIES restaurant';

        const image = document.createElement('img');
        image.src = friesImage;
        contentDiv.appendChild(image);

        const paragraph = document.createElement('p');
        contentDiv.appendChild(paragraph);
        paragraph.textContent = 'Home ipsum, dolor sit amet consectetur adipisicing elit. Neque, eaque?';

        console.log('home content injected');
}
