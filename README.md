#Générateur de citations aléatoires avec API locale
** Présentation
Ce projet implémente un générateur de citations aléatoires fonctionnant grâce à une API locale développée en Python avec Flask. L'application permet d'afficher dynamiquement des citations via une interface simple et intuitive.
Caractéristiques techniques

** Stack technologique: Python (Flask)
Fonctionnalité principale: Affichage de citations aléatoires à l'aide d'un bouton déclenchant une requête API
Architecture: Micro-API renvoyant des données au format JSON

** Objectif
Ce projet constitue une base solide pour le développement de tableaux de bord interactifs ou d'applications intranet. La combinaison d'une API locale et d'un affichage dynamique permet une grande flexibilité dans la présentation des données.

** Installation et utilisation
Prérequis

Python 3.6 ou supérieur
pip (gestionnaire de paquets Python)

Installation

Clonez ce dépôt sur votre machine locale :
bashgit clone https://github.com/votre-nom-utilisateur/Generation_citation.git
cd Generation_citation

Créez un environnement virtuel (recommandé) :
bashpython -m venv venv

Activez l'environnement virtuel :

Sous Windows :
bashvenv\Scripts\activate

Sous macOS/Linux :
bashsource venv/bin/activate



Installez les dépendances :
bashpip install -r requirements.txt
Si vous n'avez pas de fichier requirements.txt, créez-en un avec le contenu suivant :
flask==2.0.1


Lancement de l'application

Démarrez le serveur Flask :
bashpython app.py
ou
bashflask run

Accédez à l'application dans votre navigateur :
http://localhost:5000


** Utilisation de l'API

Pour obtenir une citation aléatoire via l'API :
GET http://localhost:5000/api/citation

Exemple de réponse JSON :
json{
  "auteur": "Albert Einstein",
  "citation": "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre."
}
