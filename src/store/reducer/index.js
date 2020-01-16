import { combineReducers } from 'redux';

// on importe chacun des sous-reducers
import home from './home';
import details from './details';

// combineReducers nous retourne le reducer parent généré
// on doit fournir en paramètre un objet
// avec en clé un nom donné à chaque reducer et en valeur, chaque fonction reducer
// https://redux.js.org/api/combinereducers
const reducer = combineReducers({
  // user: user
  home,
  details,
});

export default reducer;
