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
### Créer une source de données
tilesets upload-source NOM_UTILISATEUR ID_SOURCE CHEMIN_SOURCE --token $(cat token)



