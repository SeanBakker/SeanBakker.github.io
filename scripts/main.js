/*** Define Variables ***/

let currentImage = 0;
const imagePaths = ['resources/images/flavours/chocolateChipWalnut.jpeg', 'resources/images/flavours/doubleDarkChocolateChip.jpeg', 'resources/images/flavours/ubeWhiteChocolateDream.jpeg',
                    'resources/images/flavours/smoresChocolateChip.jpg', 'resources/images/flavours/cookieMonster.jpg', 'resources/images/flavours/biscoffCookieButter.jpeg'];
let isDragging = false;
let initialX = null;

const flavourImages = document.querySelectorAll('.flavour-image');
const slideshow = document.querySelector('.slideshow');

/*** Listeners for Cookie Flavour Slideshow ***/

slideshow.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX;
});

slideshow.addEventListener('mousemove', (e) => {
    // if (isDragging) {
    //     const offsetX = e.clientX - initialX;
    //     const currentImage = document.querySelector('.flavour-image');
    //     currentImage.style.transform = `translateX(${offsetX}px)`;
    // }

    if (isDragging) {
        const offsetX = e.clientX - initialX;

        flavourImages.forEach(image => {
            image.style.transform = `translateX(${offsetX}px)`;
        });
    }
});

slideshow.addEventListener('mouseup', () => {
    isDragging = false;
    // const currentImage = document.querySelector('.flavour-image');
    // currentImage.style.transform = 'translateX(0)';

    flavourImages.forEach(image => {
        image.style.transform = 'translateX(0)';
    });
});

/*** Retrieve Figure Captions ***/

// Retrieve the figure elements
const figureElements = document.querySelectorAll('.flavour-section .image-container figure');
const flavourKeys = Object.keys(FlavourEnum);

// Loop through the figure elements and set their respective flavour names
figureElements.forEach(figure => {
    const imagePath = figure.querySelector('.flavour-image').getAttribute('src');
    const index = imagePaths.findIndex(path => path === imagePath);
    const flavourName = FlavourEnum[flavourKeys[index]];

    const caption = figure.querySelector('figcaption');
    caption.textContent = flavourName;
});
