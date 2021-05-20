import { call, put, takeEvery } from "redux-saga/effects";
import { LIST_REQUEST } from "../../constants/type";
import listRequestApi from "../../services/api/listRequestApi";
import * as actions from "../actions/listRequest";

function* listRequest() {
  try {
    yield put(actions.startGetListRequest(true));
    const data = yield call(listRequestApi.getAll);
    if (data) {
      yield put(actions.getListRequestSuccess(data));
    } else {
      yield put(
        actions.getListRequestFail({
          cod: 404,
          message: "NOT FOUND",
        })
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.endGetListRequest(false));
  }
}

export default function* watchListRequest() {
  yield takeEvery(LIST_REQUEST, listRequest);
}
