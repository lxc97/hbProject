import { call, all } from "redux-saga/effects";
import watchAuth from "./auth";
import watchListRequest from "./listRequest";

export default function* rootSaga() {
  yield all([
    call(watchAuth),
    call(watchListRequest)
  ]);
}
