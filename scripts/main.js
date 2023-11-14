/*** Define Variables ***/

let currentImage = 0;
const imagePaths = ['resources/images/flavours/chocolateChipWalnut.jpeg', 'resources/images/flavours/doubleDarkChocolateChip.jpeg', 'resources/images/flavours/ubeWhiteChocolateDream.jpeg',
                    'resources/images/flavours/smoresChocolateChip.jpg', 'resources/images/flavours/cookieMonster.jpg', 'resources/images/flavours/biscoffCookieButter.jpeg'];

/*** Retrieve Figure Captions ***/

// Retrieve the figure elements
const figureElements = document.querySelectorAll('.flavour-section figure');
const flavourKeys = Object.keys(FlavourEnum);

// Loop through the figure elements and set their respective flavour names
figureElements.forEach(figure => {
    const imagePath = figure.querySelector('.flavour-image').getAttribute('src');
    const index = imagePaths.findIndex(path => path === imagePath);
    const flavourName = FlavourEnum[flavourKeys[index]];

    const caption = figure.querySelector('figcaption');
    caption.textContent = flavourName;
});
