import { UserRequest } from "../Request"
import { fetchingUsersStart, fetchingSuccess, fetchingErr } from '../Redux/Users'

export const getUsers = async (dispatch) => {
    dispatch(fetchingUsersStart)
    // console.log(product)
    try {
        const res = await UserRequest.get('/user/findAll')
        // console.log(res.data)
        dispatch(fetchingSuccess(res.data))
    } catch (error) {
        dispatch(fetchingErr())

    }
}