import aboutImage from './about.jpg';

export function populateAbout() {
    const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';

        const heading = document.createElement('h1');
        contentDiv.appendChild(heading);
        heading.textContent = 'ONLYFRIES about';

        const image = document.createElement('img');
        image.src = aboutImage;
        contentDiv.appendChild(image);

        const paragraph = document.createElement('p');
        contentDiv.appendChild(paragraph);
        paragraph.textContent = 'about ipsum, dolor sit amet consectetur adipisicing elit. Neque, eaque?';

        console.log('about content injected');
}
