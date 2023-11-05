let currentImage = 0;
const imagePaths = ['resources/images/flavours/chocolateChipWalnut.jpeg', 'resources/images/flavours/doubleDarkChocolateChip.jpeg', 'resources/images/flavours/ubeWhiteChocolateDream.jpeg',
                    'resources/images/flavours/smoresChocolateChip.jpg', 'resources/images/flavours/cookieMonster.jpg', 'resources/images/flavours/biscoffCookieButter.jpeg'];
const flavorList = document.querySelectorAll('.flavor-list li');
flavorList[currentImage].classList.add('selected');

flavorList.forEach(flavor => {
    flavor.addEventListener('click', function() {
        const selectedFlavor = document.querySelector('.flavor-list .selected');
        if (selectedFlavor) {
            selectedFlavor.classList.remove('selected');
        }

        this.classList.add('selected');
        const selectedFlavorIndex = Array.from(flavorList).indexOf(this);
        updateImage(selectedFlavorIndex);
    });
});

function showImage(index) {
    const flavorImage = document.getElementById('flavorImage');
    if (index < 0) {
        index = imagePaths.length - 1;
    } else if (index >= imagePaths.length) {
        index = 0;
    }
    flavorImage.src = imagePaths[index];
    updateSelectedFlavour(currentImage, index);
    currentImage = index;
}

function showPrevImage() {
    showImage(currentImage - 1);
}

function showNextImage() {
    showImage(currentImage + 1);
}

function updateImage(selectedFlavorIndex) {
    currentImage = selectedFlavorIndex;
    document.getElementById('flavorImage').src = imagePaths[selectedFlavorIndex];
}

function updateSelectedFlavour(previousIndex, newIndex) {
    flavorList[previousIndex].classList.remove('selected');
    flavorList[newIndex].classList.add('selected');
}
