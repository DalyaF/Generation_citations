document.addEventListener('DOMContentLoaded', function() {
    const btnGetCitation = document.getElementById('btn-get-citation');
    const citationTexte = document.getElementById('citation-texte');
    const citationAuteur = document.getElementById('citation-auteur');
    const citationPhoto = document.getElementById('citation-photo');
    const citationLoader = document.getElementById('citation-loader');
    
    // Fonction pour récupérer une nouvelle citation
    async function getCitation() {
        try {
            // Afficher le loader
            citationLoader.style.display = 'block';
            citationTexte.style.opacity = '0.5';
            citationAuteur.style.opacity = '0.5';
            citationPhoto.style.opacity = '0.5';
            
            // Appel à l'API
            const response = await fetch('/api/citation');
            
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération de la citation');
            }
            
            const data = await response.json();
            
            // Mettre à jour l'affichage avec la nouvelle citation
            citationTexte.textContent = `"${data.texte}"`;
            citationAuteur.textContent = `— ${data.auteur}`;
            
            // Mettre à jour la photo
            if (data.photo) {
                citationPhoto.src = `/static/images/${data.photo}`;
                citationPhoto.alt = data.auteur;
            } else {
                citationPhoto.src = '/static/images/placeholder.jpg';
                citationPhoto.alt = 'Auteur inconnu';
            }
            
        } catch (error) {
            console.error('Erreur:', error);
            citationTexte.textContent = "Impossible de récupérer une citation. Veuillez réessayer.";
            citationAuteur.textContent = "";
            citationPhoto.src = '/static/images/placeholder.jpg';
        } finally {
            // Cacher le loader
            citationLoader.style.display = 'none';
            citationTexte.style.opacity = '1';
            citationAuteur.style.opacity = '1';
            citationPhoto.style.opacity = '1';
        }
    }
    
    // Ajouter l'événement au bouton
    btnGetCitation.addEventListener('click', getCitation);
    
    // Charger une citation au chargement de la page
    getCitation();
});