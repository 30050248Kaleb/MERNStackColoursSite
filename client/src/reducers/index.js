import { combineReducers } from "redux";
import colourReducer from "./ColourReducer";

export default combineReducers({
    colour: colourReducer
});