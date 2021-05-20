import * as types from "../../constants/type";

export const requestList = () => ({
  type: types.LIST_REQUEST,
});

export const startGetListRequest = (loading) => ({
  type: types.START_GET_LIST_REQUEST,
  payload: loading,
});
export const endGetListRequest = (loading) => ({
  type: types.END_GET_LIST_REQUEST,
  payload: loading,
});
export const getListRequestSuccess = (data) => ({
  type: types.GET_LIST_REQUEST_SUCCESS,
  payload: data,
});
export const getListRequestFail = (error) => ({
  type: types.GET_LIST_REQUEST_FAIL,
  payload: error,
});
