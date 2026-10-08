# Vue 3 — Météo des villes

Application réalisée avec Vue 3, Vite, Vue Router et JavaScript, selon les points 1 à 6.1 du module d'introduction à Vue.js.

## Lancer

```sh
cd meteo
npm install
npm run dev
```

`npm run build` génère le dossier `dist` destiné à la production.
`npm run preview` permet de prévisualiser ce build.

## Fonctionnalités

- Accueil accessible sur `/`.
- Liste de villes accessible sur `/villes`.
- Vue détaillée d'une ville accessible sur `/ville`.
- Données météo transmises au composant `City` par props.
- Affichage de plusieurs villes avec `v-for` et des clés uniques.
- Dates relatives en français avec `timeago.js`.

Les données affichées sont fictives. Les requêtes météo et la carte interactive correspondent aux étapes suivantes du module.

## Réponses aux questions

### Les fichiers

- package.json : dépendances et scripts npm.
- package-lock.json : versions exactes installées.
- index.html : page contenant le point de montage #app.
- src/main.js : démarrage de Vue avec Router et Pinia.
- src/App.vue : structure commune et emplacement de la vue courante.
- src/router/index.js : association des URL aux composants.
- vite.config.js : configuration de Vite.
- public : fichiers servis tels quels ; src/assets : ressources importées.

### Views et components

Par convention, views contient les écrans et components les éléments réutilisables.
Tous sont des composants Vue. City est réutilisé pour chaque ville.

### Pourquoi un id ?

L'id identifie une ville de manière stable. Avec :key="city.id", Vue reconnaît chaque
carte même si la liste change d'ordre ou si une ville est retirée.
L'index du tableau représente une position, pas l'identité de la ville.

### Évaluer timeago.js

Son dépôt public présente une licence MIT, une documentation avec exemples, le code,
des traductions et un dossier de tests. Ce sont des signes rassurants, sans garantie absolue.
Avant de choisir une bibliothèque, il convient aussi de vérifier la maintenance, les versions,
les problèmes ouverts et les dépendances. Le nombre d'étoiles seul ne suffit pas.
Source consultée : https://github.com/hustcc/timeago.js

Alternative native : Intl.RelativeTimeFormat('fr'), en calculant soi-même la différence
et l'unité (minutes, heures, jours). Ici, format() calcule la durée au rendu ; elle
n'est pas rafraîchie automatiquement au fil des minutes.

## Vérifications

- Naviguer de l'accueil vers /villes puis revenir sans rechargement de page.
- Vérifier Ville 1 à 22 °C et Ville 2 à 19.5 °C et les dates relatives françaises.
- Ouvrir /ville directement : Ma ville à 20.55 °C.
- Dans Vue DevTools, modifier une température dans CitiesList et observer la carte.

L'installation de l'extension navigateur, le playground et l'exercice Vite/SASS sont distincts des points 1 à 6.1 réalisés dans ce projet.
