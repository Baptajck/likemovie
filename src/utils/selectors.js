/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugByName = (name) => slugify(name, {
  remove: /[*+~.()'"!:@]/g,
  lower: true,
});

// on crée une fonction prenant une liste de medias (un tableau) et un slug
// on veut retourner l'objet media qui possède le bon slug
export const getMediaBySlug = (medias, slug) => {
  // find permet de trouver une valeur dans un tableau, on transmet une fonction de rappelle, si elle retourne true on prend cette valeur, sinon on va regarder la suivante
  const searchedMedia = medias.find((media) => getSlugByName(media.name) === slug);
  return searchedMedia;
};
