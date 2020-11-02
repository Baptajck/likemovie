<!-- PROJECT SHIELDS -->
[![Build Status][build-shield]]()
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://www.othneildrew.com/Movie-Flex">
    <img src="https://i.imgur.com/G5UbFmr.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">LikeMovie</h3>

  <p align="center">
    Parcourez vos films et séries, bandes-annonces préférés. Découvrez ce qui se passe dans les salles en ce moment. Découvrez les titres à venir, tendance.
    <br />
    <br />
    <a href="https://likemovie.baptjack.fr">Voir le site</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table des matières

- [Table des matières](#table-des-matières)
- [A propos du projet](#a-propos-du-projet)
  - [Construit Avec](#construit-avec)
- [Pour Commencer](#pour-commencer)
  - [Pré-requis](#pré-requis)
  - [Installation](#installation)
- [License](#license)
- [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## A propos du projet

[![LikeMovie Screen Shot][product-screenshot]](https://i.imgur.com/IYOJ3VA.png)

Cette application tire parti de l’API Movie DB pour montrer divers films et séries qui vont maintenant jouer dans les salles, à venir, tendances, et bien plus encore.



### Construit Avec

* [The Movie DB (API)](https://themoviedb.org)



<!-- GETTING STARTED -->
## Pour Commencer

Pour obtenir une copie locale et exécuter suivez ces étapes simples d’exemple.

### Pré-requis

1. Obtenez une clé API gratuite à [The Movie Database (TMDB)](https://www.themoviedb.org)

### Installation

1. Clone le repo
```sh
git clone git@github.com:Baptajck/likemovie.git
```
1. Installe les packages
```sh
npm install
```
3. Entre ta clé API dans `config.js`
```JS
/* src\store\middleware\config.js */
const API_KEY = 'ENTER YOUR API';
```



<!-- LICENSE -->
## License

Distribué sous la licence MIT. Voir `LICENSE` pour plus d’informations.



<!-- CONTACT -->
## Contact

Baptiste Parville - [LinkedIn](https://linkedin.com/in/baptiste-parville) - baptiste-parville@protonmail.com

Christian Bourgeois - [LinkedIn](https://www.linkedin.com/in/christianbourgeoisdev/)



<!-- MARKDOWN LINKS & IMAGES -->
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: https://i.imgur.com/IYOJ3VA.png
