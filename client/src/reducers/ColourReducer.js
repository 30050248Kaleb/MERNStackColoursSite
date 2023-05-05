import {v4 as uuid} from 'uuid';
import {GET_COLOURS, ADD_COLOUR, UPDATE_COLOUR, DELETE_COLOUR} from '../actions/constants';
/* The state is in this reducer for testing. It will eventually be retrieved from Mongo */
const initialState = {
    colours:[
        {
        _id: uuid(),
        color: "red",
        category: "hue",
        type: "primary",
        code: {
            rgba: "rgb(255,0,0)",
            hex: "#FF0000"
            }
        },
        {
            _id: uuid(),
            color: "blue",
            category: "hue",
            type: "primary",
            code: {
                rgba: "rgb(0,0,255)",
                hex: "#0000FF"
                },
        }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_COLOURS:{
            return {
                ...state
            };
        }
        default:{
            return state;
        }
    }
}