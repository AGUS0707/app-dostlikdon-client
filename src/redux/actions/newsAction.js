
import {SET_STATE} from "../types/newsTypes";
import {API_PATH} from "../../tools/constants";
import axios from "axios";
import {updateState} from "./menusActions";
import {toast} from "react-toastify";

export function setState(data) {
    return {
        type: SET_STATE,
        payload: data
    }
}

export function saveNews(event, errors, values) {
    return function (dispatch, getState) {
        axios.post(API_PATH + "news", {...values, photo: getState().news.photo})
            .then( (res) => {
                dispatch(getNews())
                toast.success(res.data.message);
                dispatch(setState({open: false, photo: "", url: ""}))

            })
    }
}

export const saveFile = (file) => (dispatch) => {
    axios.post(API_PATH + "file/save", file)
        .then((res) => {
            console.log(res)
            dispatch(setState({photo: res.data.id}))
        })
}

export const getNews = () => (dispatch) => {
    axios.get(API_PATH +"news")
        .then((res) => {
            dispatch(setState({news: res.data.data}))
        })
}

export const deleteNews = () => (dispatch, getState) => {
    axios.delete(API_PATH + "news/" + getState().news.selectedIndex)
        .then((res) => {
            toast.success(res.data.message)
            dispatch(getNews());
            dispatch(setState({deleteModal: false}))
        })
}