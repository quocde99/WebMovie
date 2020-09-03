import * as ActionType from "../Types/type"
const initalValue ={
    listUser : [],
    searchUser : [],
 //   userDetails : {},
    loading: false,
    error: false
}
const ListUser=(state = initalValue, action) => {
    switch (action.type) {
        case ActionType.GET_USER_REQUEST :{
            return {...state,loading:true}
        }
        case ActionType.GET_USER :
            {
                state.listUser = action.data;
                return {...state,loading:false}
            }
        case ActionType.GET_USER_ERROR:{
            return {...state,loading:false,error:true}
        }
        case ActionType.SEARCH_USER:{
            console.log('search',action.data);
            state.searchUser = action.data;
            return {...state}
        }
        // case ActionType.GET_USER_DETAIL:{
        //     state.userDetails = action.data;
        //     return {...state}
        // }
        default:
            return state;
    }
}
export default ListUser;