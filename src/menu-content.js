import menuImage from './menu.jpg';

export function populateMenu() {
    const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';

        const heading = document.createElement('h1');
        contentDiv.appendChild(heading);
        heading.textContent = 'ONLYFRIES menu';

        const image = document.createElement('img');
        image.src = menuImage;
        contentDiv.appendChild(image);

        const paragraph = document.createElement('p');
        contentDiv.appendChild(paragraph);
        paragraph.textContent = 'Menu ipsum, dolor sit amet consectetur adipisicing elit. Neque, eaque?';

        console.log('menu content injected');
}
