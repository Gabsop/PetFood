import { all } from "redux-saga/effects";

import shop from "./shop/sagas";

export default function* rootSaga() {
  return yield all([shop]);
}
