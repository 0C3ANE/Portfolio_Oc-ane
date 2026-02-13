# Portfolio Cybersécurité - Océane PRATHEU

Portfolio professionnel avec thème Matrix/Cybersecurity pour SOC Manager & Threat Detection Analyst.

## 🚀 Fonctionnalités

- **Matrix Rain Background** - Animation de fond style Matrix avec canvas
- **Encrypted Text Effect** - Effet de texte crypté au survol
- **Glitch Effect** - Effet glitch sur le titre principal
- **Sticky Scroll** - Navigation fluide avec animations au défilement
- **MITRE ATT&CK Matrix** - Visualisation interactive des capacités de détection
- **Responsive Design** - Optimisé pour tous les appareils
- **Animations avancées** - Parallax, révélation progressive, effets 3D

## 📁 Structure des fichiers

```
votre-repo/
├── index.html          # Page principale
├── style.css           # Styles CSS
├── script.js           # JavaScript
└── assets/             # Dossier des ressources
    ├── profile.jpg     # Votre photo de profil
    ├── thales.jpg      # Logo Thales
    ├── airbus.jpg      # Logo Airbus
    ├── dila.jpg        # Logo DILA
    └── globalong.jpg   # Logo Globalong
```

## 🎨 Configuration GitHub Pages

### 1. Créer le repository

1. Créez un nouveau repository sur GitHub
2. Nommez-le : `votre-username.github.io` (pour un site principal)
   OU `portfolio` (pour un site de projet)

### 2. Uploader les fichiers

```bash
git clone https://github.com/votre-username/votre-repo.git
cd votre-repo

# Copiez les fichiers index.html, style.css, script.js dans le repo

# Créez le dossier assets
mkdir assets

# Ajoutez vos images dans le dossier assets
# Les images doivent être nommées :
# - profile.jpg
# - thales.jpg
# - airbus.jpg
# - dila.jpg
# - globalong.jpg

git add .
git commit -m "Initial commit - Portfolio Cybersécurité"
git push origin main
```

### 3. Activer GitHub Pages

1. Allez dans **Settings** de votre repository
2. Dans la section **Pages** (menu de gauche)
3. Sous **Source**, sélectionnez `main` branch et `/ (root)`
4. Cliquez sur **Save**
5. Votre site sera disponible à : `https://votre-username.github.io/votre-repo/`

## 🖼️ Préparation des images

### Photo de profil (profile.jpg)
- Format : JPG ou PNG
- Dimensions recommandées : 400x400px minimum
- Ratio : Carré (1:1)
- Poids : < 500KB pour performances optimales

### Logos d'entreprises
- Format : JPG, PNG (PNG recommandé pour transparence)
- Dimensions : 200x200px minimum
- Ratio : Carré ou horizontal
- Poids : < 200KB chacun
- Fond : Transparent (PNG) ou blanc

**Astuce** : Utilisez un outil comme [Squoosh](https://squoosh.app/) pour optimiser vos images.

## 🎨 Personnalisation

### Couleurs (dans style.css)

Les couleurs principales sont définies au début du fichier CSS :

```css
:root {
    --primary: #00ff9f;      /* Vert Matrix */
    --secondary: #00d4ff;    /* Bleu cyan */
    --accent: #a855f7;       /* Violet */
    --bg-dark: #0a0e27;      /* Fond sombre */
}
```

### Polices

Le portfolio utilise :
- **Orbitron** : Titres et éléments display
- **JetBrains Mono** : Texte monospace et code

Ces polices sont chargées via Google Fonts.

### Contenu

Tous les textes peuvent être modifiés directement dans `index.html`.

## ⚡ Fonctionnalités interactives

### Effets au survol
- Les textes avec classe `.encrypted-text` affichent un effet de décryptage
- Les cartes s'élèvent et brillent au survol
- Les boutons ont un effet de brillance animé

### Raccourcis clavier
- **M** : Change l'opacité du fond Matrix
- **H** : Retour en haut de page

### MITRE ATT&CK
- Cliquez sur les filtres pour afficher des tactiques spécifiques
- Survolez les techniques pour voir les détails
- Cliquez sur une technique pour voir une popup d'information

## 🔧 Dépannage

### Les images ne s'affichent pas
1. Vérifiez que les noms de fichiers correspondent exactement
2. Assurez-vous que les images sont dans le dossier `assets/`
3. Les noms sont sensibles à la casse : `profile.jpg` ≠ `Profile.jpg`

### Le site ne se charge pas sur GitHub Pages
1. Attendez 5-10 minutes après l'activation (délai de propagation)
2. Vérifiez que `index.html` est à la racine du repo
3. Vérifiez que la branche configurée est `main` (pas `master`)

### Les animations ne fonctionnent pas
1. Ouvrez la console du navigateur (F12)
2. Vérifiez qu'il n'y a pas d'erreurs JavaScript
3. Assurez-vous que `script.js` est bien chargé

## 📱 Responsive

Le site est optimisé pour :
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🌟 Améliorations futures possibles

- Ajouter un mode sombre/clair
- Intégrer un blog technique
- Ajouter une section projets détaillée
- Implémenter un formulaire de contact fonctionnel
- Ajouter des animations WebGL pour plus d'effets

## 📄 Licence

Ce portfolio est conçu pour Océane PRATHEU. Vous pouvez l'utiliser comme base pour votre propre portfolio.

## 🔒 Sécurité

Ce portfolio est statique (HTML/CSS/JS uniquement). Il ne collecte aucune donnée et ne nécessite aucun backend.

## 📞 Contact

Pour toute question sur l'utilisation ou la personnalisation :
- Email : Oceane.pratheu@gmail.com
- LinkedIn : [Océane PRATHEU](https://www.linkedin.com/in/oc%C3%A9ane-pratheu-478b981b7/)

---

**Développé avec 💚 Matrix theme**
Océane PRATHEU - SOC Manager & Cybersecurity Expert
