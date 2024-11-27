const modifierButton = document.getElementById("modifierButton");
let afficher = false;
document.addEventListener("DOMContentLoaded", () => {
   

    modifierButton.addEventListener("click", () => {
        if (!afficher) {
            enter();
        } else {
            save();
        }
    });

    function enter() {
        afficher = true;
        modifierButton.textContent = "Enregistrer";

        // Liste des champs à éditer
        const infos = ["nom", "poste", "organisation", "lieu", "email"];

        infos.forEach(info => {
            const span = document.getElementById(info);
            // Créer un input
            const input = document.createElement("input");
            input.type = (info === "email") ? "email" : "text";
            input.className = "form-control form-control-sm";
            input.id = `${info}Input`;
            

            // Remplacer le span par l'input
            span.replaceWith(input);
        });
    }

    function save() {
        enregistrer = false;
        modifierButton.textContent = "Modifier";

        // Liste des champs à sauvegarder
        const informations = ["nom", "poste", "organisation", "lieu", "email"];

        informations.forEach(information => {
            const input = document.getElementById(`${information}Input`);
            const newValue = input.value.trim();

            // Créer un nouveau span avec le nouveau texte
            const span = document.createElement("span");
            span.id = informations;
            span.textContent = newValue !== "" ? newValue : "Non renseigné";

            // Remplacer l'input par le span
            input.replaceWith(span);
        });

    }
});







// Gestion de l'image d'en-tête
const headerImageInput = document.getElementById('header-image-input');
const headerImagePreview = document.getElementById('header-image-preview');

headerImageInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Récupérer le fichier sélectionné
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            headerImagePreview.style.backgroundImage = `url('${e.target.result}')`;
            headerImagePreview.style.backgroundSize = 'cover';
            headerImagePreview.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(file); // Lire le fichier en tant que DataURL
    }
});

// Gestion de l'image de profil
const profileImageInput = document.getElementById('profile-image-input');
const profileImagePreview = document.getElementById('profile-image-preview');
const profileIcon = document.querySelector('#profileIcon'); // Sélectionne l'icône de profil

profileImageInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Récupérer le fichier sélectionné
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImagePreview.src = e.target.result; // Mettre à jour l'image de profil
            profileImagePreview.style.display = 'block'; // Afficher l'image
            if (profileIcon) {
                profileIcon.style.display = 'none'; // Masquer l'icône
            }
        };
        reader.readAsDataURL(file); // Lire le fichier en tant que URL, exemple : Bureau/image/png
    }
});





// Fonction pour gérer l'upload d'une image
function handleImageUpload(inputElement, previewElement = null) {
    inputElement.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (previewElement.tagName === 'IMG') {
                    previewElement.src = e.target.result;
                    previewElement.style.display = 'block';
                } else {
                    previewElement.style.backgroundImage = `url('${e.target.result}')`;
                    previewElement.style.backgroundSize = 'cover';
                    previewElement.style.backgroundPosition = 'center';
                }
                if (description) description.style.display= 'none';
            };
            reader.readAsDataURL(file);
        }
    });
}

// Initialisation des uploads
handleImageUpload(
    document.getElementById('Titre_encadrement1'), // Input pour l'en-tête
    document.getElementById('Titre_encadrement1') // Zone de prévisualisation pour l'en-tête
);

handleImageUpload(
    document.getElementById('profile-image-input'), // Input pour la photo de profil
    document.getElementById('profile-image-preview'), // Zone de prévisualisation pour la photo de profil
    document.querySelector('#profileIcon') // Icône par défaut
);


