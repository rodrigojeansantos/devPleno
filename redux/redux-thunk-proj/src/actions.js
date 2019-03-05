import axios from 'axios'

export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}
export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}
export const loadDataError = () => {
    return {
        type: 'LOAD_DATA_ERROR'
    }
}

export const loadData = () => {
    return dispatch => {
        // setTimeout(() => dispatch(loadDataRequest()), 2000)
        dispatch(loadDataRequest())
        axios
            .get('http://httpbin.org/ip')
            // .then((data) => dispatch(loadDataSuccess(data)) )
            .then( ({data}) => dispatch(loadDataSuccess(data)) )
            .catch(() => {dispatch(loadDataError())})
    }
}


export const loadUARequest = () => {
    return {
        type: 'LOAD_UA_REQUEST'
    }
}
export const loadUASuccess = (data) => {
    return {
        type: 'LOAD_UA_SUCCESS',
        data
    }
}
export const loadUAError = () => {
    return {
        type: 'LOAD_UA_ERROR'
    }
}

export const loadUA = (axios) => {
    return dispatch => {
        // setTimeout(() => dispatch(loadDataRequest()), 2000)
        dispatch(loadUARequest())
        axios
            .get('http://httpbin.org/user-agent')
            // .then((data) => dispatch(loadDataSuccess(data)) )
            .then( ({data}) => dispatch(loadUASuccess(data)) )
            .catch(() => {dispatch(loadUAError())})
    }
}

//Para facilitar no teste
export default { loadUA: loadUA.bind(null, axios)}