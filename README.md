# 03 - Gestion de catalogue de livres (React + Vite)
Petite application de gestion de catalogue de livres pour une bibliothèque universitaire, réalisée dans le cadre du TP React JS.
## Notions utilisées
- **Composant** : fonction JavaScript qui retourne du JSX (son nom commence par une majuscule).
- **Props** : paramètres envoyés du composant parent vers l'enfant (lecture seule).
- **`.map()` et `key`** : transformation d'un tableau en liste de composants, avec une `key` unique.
- **`useState`** : variable d'état ; sa modification via `set...` rafraîchit l'affichage.
## Installation et lancement

```bash
npm create vite@latest 03 -- --template react
cd 03
npm install
mkdir src/components
npm run dev
```
L'application est ensuite disponible sur l'adresse affichée dans le terminal (en général `http://localhost:5173`).

## Structure du projet
```
03/
├── src/
│   ├── components/
│   │   └── BookCard.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```
## Fonctionnalités
### Composant `BookCard.jsx`
Reçoit 4 props : `titre`, `auteur`, `estDisponible` (booléen) et `onClickEmprunt` (fonction).

- Affiche le titre et l'auteur dans une carte stylisée (bordure, marge intérieure, coins arrondis).
- Affiche le statut de façon conditionnelle : "🟢 Disponible" ou "🔴 Emprunté".
- Contient un bouton en bas de la carte : "Emprunter" si le livre est disponible, "Rendre" sinon. Le clic déclenche `onClickEmprunt`.
### Page `App.jsx`

- État `books` initialisé avec 4 livres (`id`, `titre`, `auteur`, `estDisponible`).
- Titre principal indiquant en temps réel le nombre de livres disponibles (calculé avec `filter`).
- Affichage d'un `BookCard` par livre avec `.map()` et `key={book.id}`.
- **Emprunt / retour** : la fonction `onClickEmprunt(bookId)` inverse `estDisponible` du livre cliqué.
- **Formulaire d'ajout** : deux champs contrôlés (`titre` et `auteur`) gérés avec `useState`. À la soumission (`onSubmit`) :
  1. `e.preventDefault()` empêche le rechargement de la page ;
  2. on vérifie que les champs ne sont pas vides ;
  3. le nouveau livre est ajouté à `books` (disponible par défaut, id généré avec `Date.now()`) ;
  4. les champs de saisie sont vidés.
