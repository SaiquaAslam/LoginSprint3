import * as actionCreators from '../actions/actions'

const initialState = {
    returnedMessage: null,
    detailsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {



        case actionCreators.ADD_LOGINDETAILS:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data.details
            console.log('Addition of detail')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,

                detailsList: listAfterAddition
            }



        case actionCreators.GET_LOGINDETAILS_BY_NAME:
            console.log(action)
            let listOfloginDetailsByName = action.data.details

            console.log('List of plants by  name')
            console.log(listOfloginDetailsByName)
            return {
                detailsList: listOfloginDetailsByName
            }

        case actionCreators.AUTH_SUCCESS:
            return {
                detailsList: action.data.loginDetails,
                returnedMessage: action.data.message
            }

        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                detailsList: []
            }




        default:
            return state
    }
}

export default reducer;