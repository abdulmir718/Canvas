import * as actionTypes from '../constants/paintingConstants.js';
import axios from 'axios';

export const getPaintings = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PAINTINGS});

        const {data} = await axios.get('/paintings');

        dispatch({
            type: actionTypes.GET_PAINTINGS_SUCCESSFUL,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PAINTINGS_FAILED,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getPaintingDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PAINTING_DETAILS});

        const {data} = await axios.get(`/paintings/${id}`);

        dispatch({
            type: actionTypes.GET_PAINTING_DETAILS_SUCCESSFUL,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PAINTING_DETAILS_FAILED,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const removePaintingDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PAINTING_DETAILS_RESET
    });
};