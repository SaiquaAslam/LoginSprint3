import axios from 'axios'

export const ADD_LOGINDETAILS = 'ADD_LOGINDETAILS'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const AUTH_SUCCESS = "AUTH_SUCCESS"

export const GET_LOGINDETAILS_BY_NAME = 'GET_LOGINDETAILS_BY_NAME'



const BASE_URL = 'http://localhost:8282/api/'



const addLoginDetailsAction = (data) => {
    return {
        type: ADD_LOGINDETAILS,
        data
    }
}

export const addLoginDetails = (newloginDetails) => {
    return (dispatch) => {
        axios.post(BASE_URL, newloginDetails)
            .then((response) => {
                dispatch(addLoginDetailsAction(response.data))
            })
    }
}




//search by names action
const getloginDetailsByNameAction = (data) => {
    return {
        type: GET_LOGINDETAILS_BY_NAME,
        data
    }
}

const authSuccess = (data) => {
    return {
        type: AUTH_SUCCESS,
        data: data
    }
}

export const authenticateUser = (payLoad) => {
    return async (dispatch) => {
        try {
            const authUserResponse = await axios.post(BASE_URL, payLoad);

            dispatch(authSuccess(authUserResponse.data))
        }
        catch (error) {
            console.log(error.message)
        }
    }
}

//search by names function
export const getloginDetailsByName = (userName) => {
    return (dispatch) => {
        // let URL = `http://localhost:8181/api/search?name=${name}`
        let URL = BASE_URL + "search/" + userName

        axios.get(URL)
            .then((response) => {
                dispatch(getloginDetailsByNameAction(response.data))
            })
    }
}

//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}

