document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'path/to/your/mini-games.html'; // Remplace par le chemin vers ta page de mini-jeux
});

document.getElementById('game1Button').addEventListener('click', function() {
    window.location.href = 'path/to/your/game1.html'; // Remplace par le chemin vers le premier jeu
});

document.getElementById('heartButton').addEventListener('click', function() {
    showModal('https://i.ibb.co/Rp7DRzy/20715092-coeur-avec-une-trou-de-serrure-est-une-symbole-de-decouverte-une-partenaire-qui-volonte-etr.jpg', 'Félicitations ! Tu as trouvé le cadena de mon coeur, bonne chance pour trouver la clée mtn ma chérie😉❤️.');
});

function showModal(imageSrc, text) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalText').innerText = text;
    modal.style.display = 'block';
}

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Ajouter des images de manière aléatoire
function addRandomImages() {
    const imageUrls = [
        'https://i.ibb.co/Ybr25Sg/t-l-charg-removebg-preview.png',
        'https://i.ibb.co/stBkkVq/t-l-charg-1-removebg-preview.png',
        'https://i.ibb.co/sFkdQzc/1f618.png',
        'https://i.ibb.co/s9gB4Zp/ec43ad26487fa68b54bfe749447ac6.webp',
        'https://em-content.zobj.net/source/emojipedia/264/heart-on-fire_2764-fe0f-200d-1f525.png',
        'https://em-content.zobj.net/source/emojione/178/permanent-paper-sign_267e.png'
    ];
    
    const container = document.querySelector('.image-container');

    for (let i = 0; i < 20; i++) { // Ajoute 20 images
        const img = document.createElement('img');
        img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        img.style.top = `${Math.random() * 100}vh`;
        img.style.left = `${Math.random() * 100}vw`;
        img.style.animationDuration = `${Math.random() * 20 + 10}s`; // Durée de l'animation aléatoire
        img.style.animationDelay = `${Math.random() * 10}s`; // Délai de début de l'animation aléatoire
        container.appendChild(img);
    }
}

// Appeler la fonction pour ajouter les images
addRandomImages();
