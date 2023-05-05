import { GET_COLOURS, ADD_COLOUR, UPDATE_COLOUR, DELETE_COLOUR } from "./constants";

export const getColours = () => {
    return {
        type: GET_COLOURS
    };
};