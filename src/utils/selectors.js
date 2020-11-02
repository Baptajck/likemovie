/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugByName = (name) => slugify(name, {
  remove: /[*+~.()'"!:@]/g,
  // remove: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
  lower: true,
});

// {
//   return text.toString().toLowerCase()
//     .replace(/\s+/g, '-')           // Replace spaces with -
//     .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
//     .replace(/\-\-+/g, '-')         // Replace multiple - with single -
//     .replace(/^-+/, '')             // Trim - from start of text
//     .replace(/-+$/, '');            // Trim - from end of text
// }

// on crée une fonction prenant une liste de medias (un tableau) et un slug
// on veut retourner l'objet media qui possède le bon slug
export const getMediaBySlug = (medias, slug) => {
  // find permet de trouver une valeur dans un tableau, on transmet une fonction de rappelle, si elle retourne true on prend cette valeur, sinon on va regarder la suivante
  const searchedMedia = medias.find((media) => getSlugByName(media.name) === slug);
  return searchedMedia;
};


// Fonction qui permet la coloration des pourcentage
export const colorRating = (param) => {
  if (param <= 5) {
    return '_rating_bad';
  }
  if (param <= 7.5) {
    return '_rating_medium';
  }
  return '_rating_good';
};

// permet de mettre "..." après un nombre préçis de caractères
export const truncStr = (string, limit) => (string.length > limit
  ? `${string
    .trim()
    .substring(0, limit - 3)
    .trim()}...`
  : string);


// Permet de split l'url pour recupèrer une données dedans
export const splitURL = () => {
  const url = document.location.hash;
  const a = url.split('/');
  const n = Number(a[3]);
  return n;
};
