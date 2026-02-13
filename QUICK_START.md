# 🚀 Guide de déploiement rapide - GitHub Pages

## Étape 1 : Créer le repository (2 minutes)

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
3. Nommez votre repository :
   - Option A : `votre-username.github.io` (site principal)
   - Option B : `portfolio-cybersecurity` (site de projet)
4. ✅ Cochez **"Public"**
5. ✅ Cochez **"Add a README file"**
6. Cliquez sur **"Create repository"**

## Étape 2 : Uploader les fichiers (3 minutes)

### Via l'interface web GitHub (plus simple) :

1. Dans votre repository, cliquez sur **"Add file"** → **"Upload files"**
2. Glissez-déposez ces fichiers :
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Cliquez sur **"Commit changes"**

### Créer le dossier assets :

1. Cliquez sur **"Add file"** → **"Create new file"**
2. Tapez : `assets/placeholder.txt`
3. Dans le fichier, écrivez : `Dossier pour les images`
4. Cliquez sur **"Commit changes"**

### Uploader les images :

1. Allez dans le dossier `assets/` (cliquez dessus)
2. Cliquez sur **"Add file"** → **"Upload files"**
3. Glissez-déposez vos 5 images :
   - `profile.jpg`
   - `thales.jpg`
   - `airbus.jpg`
   - `dila.jpg`
   - `globalong.jpg`
4. Cliquez sur **"Commit changes"**

### Via Git en ligne de commande (si vous préférez) :

```bash
# Cloner le repository
git clone https://github.com/votre-username/votre-repo.git
cd votre-repo

# Copier tous vos fichiers dans ce dossier
# Puis :
git add .
git commit -m "Portfolio initial"
git push origin main
```

## Étape 3 : Activer GitHub Pages (1 minute)

1. Dans votre repository, cliquez sur **"Settings"** (⚙️)
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Sous **"Source"** :
   - Branch : sélectionnez `main`
   - Folder : sélectionnez `/ (root)`
4. Cliquez sur **"Save"**
5. ✅ Attendez 2-5 minutes

## Étape 4 : Vérifier le déploiement

1. Rafraîchissez la page **"Settings → Pages"**
2. Vous verrez un message : **"Your site is live at https://..."**
3. Cliquez sur le lien pour voir votre portfolio !

## 🎯 Votre site sera accessible à :

- **Site principal** : `https://votre-username.github.io/`
- **Site de projet** : `https://votre-username.github.io/nom-du-repo/`

## ⚠️ Problèmes courants et solutions

### Le site ne s'affiche pas
- ✅ Attendez 5-10 minutes après l'activation
- ✅ Vérifiez que `index.html` est à la racine (pas dans un sous-dossier)
- ✅ Vérifiez que GitHub Pages est activé dans Settings

### Les images ne s'affichent pas
- ✅ Vérifiez que les images sont dans le dossier `assets/`
- ✅ Vérifiez les noms exacts (sensible à la casse) :
  - ❌ `Profile.jpg` ou `PROFILE.JPG`
  - ✅ `profile.jpg`
- ✅ Vérifiez que les chemins dans `index.html` sont corrects :
  ```html
  <img src="assets/profile.jpg" alt="Photo">
  ```

### Le CSS ne se charge pas
- ✅ Vérifiez que `style.css` est à la racine
- ✅ Videz le cache du navigateur (Ctrl + Shift + R)

### Le JavaScript ne fonctionne pas
- ✅ Ouvrez la console du navigateur (F12)
- ✅ Vérifiez s'il y a des erreurs
- ✅ Vérifiez que `script.js` est à la racine

## 📝 Checklist avant publication

- [ ] Tous les fichiers sont uploadés
- [ ] Le dossier `assets/` contient les 5 images
- [ ] Les noms de fichiers correspondent exactement
- [ ] GitHub Pages est activé dans Settings
- [ ] Vous avez attendu 5 minutes après l'activation
- [ ] Le lien du site fonctionne

## 🔄 Mettre à jour le site

Pour modifier votre site après publication :

1. Modifiez vos fichiers localement
2. Sur GitHub, allez dans le fichier à modifier
3. Cliquez sur l'icône ✏️ (Edit)
4. Faites vos modifications
5. Cliquez sur **"Commit changes"**
6. Attendez 1-2 minutes → Le site est mis à jour !

## 🎨 Personnalisation rapide

### Changer les couleurs principales :

Ouvrez `style.css` et modifiez les lignes 7-12 :

```css
:root {
    --primary: #00ff9f;      /* Couleur principale */
    --secondary: #00d4ff;    /* Couleur secondaire */
    --accent: #a855f7;       /* Couleur d'accent */
}
```

### Modifier le contenu :

Ouvrez `index.html` et cherchez les sections :
- `<section id="home">` → Texte d'accueil
- `<section id="about">` → Profil
- `<section id="experience">` → Expériences
- etc.

## 📱 Tester en local (optionnel)

Si vous voulez tester avant de publier :

1. Ouvrez `index.html` directement dans votre navigateur
2. Ou utilisez un serveur local :
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Puis ouvrez : http://localhost:8000
   ```

## 🎓 Ressources utiles

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Guide Markdown](https://www.markdownguide.org/)
- [W3Schools HTML](https://www.w3schools.com/html/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 💡 Conseils pro

1. **Commits réguliers** : Faites des petites modifications fréquentes
2. **Messages clairs** : "Ajout section compétences" plutôt que "update"
3. **Backup** : Gardez une copie locale de vos fichiers
4. **Tests** : Testez sur différents navigateurs (Chrome, Firefox, Safari)
5. **Mobile** : Vérifiez que tout fonctionne sur smartphone

## 🆘 Besoin d'aide ?

- GitHub Community : [community.github.com](https://github.community/)
- Stack Overflow : Tag `github-pages`
- Documentation : [docs.github.com](https://docs.github.com)

---

## ⏱️ Temps total estimé : 10-15 minutes

1. ⏱️ 2 min → Créer le repository
2. ⏱️ 3 min → Uploader les fichiers
3. ⏱️ 1 min → Activer GitHub Pages
4. ⏱️ 5 min → Attendre le déploiement
5. ⏱️ 2 min → Vérifier le résultat

**Félicitations ! 🎉 Votre portfolio est en ligne !**

---

**Note** : Si vous rencontrez des problèmes, vérifiez d'abord que :
1. Les noms de fichiers sont corrects
2. La structure des dossiers est respectée
3. Vous avez attendu suffisamment longtemps après l'activation

**Astuce** : Utilisez d'abord le fichier `index-with-placeholders.html` pour tester sans avoir besoin d'images !
