# Cartes universelles pour voyages sédentaires
« Cartes universelles pour voyages sédentaires » est un projet en arts visuels qui allie art imprimé et art numérique pour interroger l’impact de l’utilisation de Google Maps sur notre rapport à l’espace et au temps. Une série d’estampes évoquant des cartes géographiques de territoires fictifs seront reprises dans une application interactive web qui simulera la facture visuelle de Google Maps. Dans cette version simplifiée et contemplative de l’application bien connue, des territoires et des itinéraires irréels se métamorphoseront en continu au gré de la navigation. 

## Installation
### Localement
git clone https://github.com/vlafortune/vlafortune.github.io-cartesuniverselles # (Cloner le projet)
cd vlafortune.github.io-cartesuniverselles/
curl https://bootstrap.pypa.io/get-pip.py | python3 # Installer pip (si nécessaire)
pip install 'mapbox-tilesets[estimate-area]' # Installer le module Mapx
npm i # Installer les dépendances web (si nécessaire)

## En ligne
1. Créer un "access token" qui possède les droits tilesets:list, tilesets:read et tilesets:write (https://account.mapbox.com/access-tokens/)
1.1 Copier "l'access token" secret dans un fichier nommé "token" à la racine du répertoire du projet # Attention le "token" ne sera pas sauvegardé dans Github pour des raisons de sécurité.

## Références 
Tutoriel à suivre : https://docs.mapbox.com/help/tutorials/get-started-mts-and-tilesets-cli/
Édition du style des cartes : https://studio.mapbox.com/

## Guide
Pour construire une carte on doit utiliser une recette qui, grosso modo, détermine à quel niveaux de zoom un ensemble de sources de données sont utilisées.

### Sources de données
Les sources de données sont de fichier geojson dans lesquels chaque ligne représente un objet (line-delimited)
Créer : tilesets upload-source NOM_UTILISATEUR ID_SOURCE CHEMIN_SOURCE --token $(cat token)
Lister : tilesets list-sources NOM_UTILISATEUR --token $(cat token)

### Recette
*Note : utiliser un niveau de zoom supérieur à 13 dans une recette impliquera des couts plus importants*
Le fichier "hello-world-recipe.json" contient un exemple de recette qui n'a qu'une source de données.

### Tileset
1. Créer : tilesets create NOM_UTILISATEUR.hello-world-tiles --recipe hello-world-recipe.json --name "hello world" --token $(cat token) # Tous les paramètres indiqués sont nécessaires
  * Note : une fois créé, le tileset est disponible ici : https://studio.mapbox.com/tilesets/, mais il n'est pas visible. Il faut d'abord le publier*
2. Publier le tileset : tilesets publish NOM_UTILISATEUR.hello-world-tiles --token $(cat token) # Attendre quelques minutes pour que Mapbox publie le tileset
  * Pour vérifier l'état d'avancement : tilesets status NOM_UTILISATEUR.hello-world-tiles 
  * Le tileset est maintenant disponible pour l'exploration https://studio.mapbox.com/tilesets/
