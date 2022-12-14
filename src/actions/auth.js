import { ATUH } from '../constants/actionTypes';
import * as api from '../api/index';


export const signin = (formData, history) => async (dispatch) => {
    try {
        //! log in the user ..
        const { data } = await api.signin(formData);

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        
        //! sign up the user..
        history.push('/');

    } catch (error) {
        console.log(error);

    }
}


