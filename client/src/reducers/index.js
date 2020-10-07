import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import subCounterReducer from "./authReducers";
import langVoc from "./langReducer";
import langGram from "./langGramReducer";
import langVedioLink from "./vedioLinkReducer";
import langExercise from "./langExerciseReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  subCounterReducer: subCounterReducer,
  langVoc: langVoc,
  langGram: langGram,
  langVedioLink: langVedioLink,
  langExercise: langExercise,
});
