// Sélectionne l'élément du bouton et du message
const btnAccept = document.getElementById('accepterPol');
const message = document.getElementById('message');

// Fonction pour accepter les politiques
function accepterPolitiques(e) {
    e.preventDefault();  // Empêche l'action par défaut (si nécessaire)

    // Enregistre l'acceptation dans le stockage local pour qu'il ne soit pas demandé à chaque fois
    localStorage.setItem('politique_acceptée', 'true');

    // Affiche un message de confirmation
    message.style.display = 'block';

    // Masque le bouton après l'acceptation
    btnAccept.style.display = 'none';
}

// Ajoute un événement de clic au bouton
btnAccept.addEventListener('click', accepterPolitiques);
