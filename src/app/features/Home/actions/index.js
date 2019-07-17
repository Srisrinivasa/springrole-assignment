import { actionTypes } from "../actionTypes";
import { action } from "core/actions";
import axios from "axios";

export const getData = () => {
    const request = new Promise((resolve, reject) => {
        axios.get('http://demo9197058.mockable.io/users')
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    })
    return action(actionTypes.GET_DATA, request);
};
