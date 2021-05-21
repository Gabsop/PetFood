import { takeLatest, all, call, put, select } from "redux-saga/effects";
import types from "./types";
import api from "../../../services/api";
import { setPetshops, setPetshop } from "./actions";
import Swal from "sweetalert2";

export function* requestPetshops() {
  const response = yield call(api.get, "/petshops");
  const res = response.data;
  yield put(setPetshops(res.petshops));
}

export function* requestPetshop(payload) {
  const response = yield call(api.get, `/petshop/${payload.id}`);
  const res = response.data;
  yield put(setPetshop(res.petshop));
}

export function* makePurchase() {
  const { transaction } = yield select((state) => state.shop);
  const response = yield call(api.post, "/purchase", transaction);
  const res = response.data;

  if (res.error) {
    Swal.fire({
      icon: "error",
      title: "Oopsss...",
      text: res.message,
    });

    return false;
  }

  if (res.data.status !== "paid") {
    Swal.fire({
      icon: "error",
      title: "Oopsss...",
      text: res.data.refuse_reason,
    });

    return false;
  }

  Swal.fire({
    icon: "success",
    title: "Tudo Certo!",
    text: "Sua compra foi aprovada com sucesso",
  });
}

export default all([
  takeLatest(types.REQUEST_PETSHOPS, requestPetshops),
  takeLatest(types.REQUEST_PETSHOP, requestPetshop),
  takeLatest(types.MAKE_PURCHASE, makePurchase),
]);
