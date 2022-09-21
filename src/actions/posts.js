import * as api from '../api';

//have to make action creators aka functins that retrn actions 

//function that returns an async 

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch (error) {
        console.log(error.message);
    }

}