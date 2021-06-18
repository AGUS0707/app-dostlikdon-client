import {SET_STATE} from "../types/newsTypes";

const initialState = {
    open: false,
    url: "",
    photo: "",
    news: [],
    selectedIndex: "",
    deleteModal: false,
    selectedItem: {}

}

export const newsReducer = (state=initialState, action) => {
    if (action.type === SET_STATE){
        return {
            ...state,
            ...action.payload
        }
    }
    return state
}

