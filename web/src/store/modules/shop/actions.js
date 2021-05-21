import types from "./types";

export function setCustomer(customer) {
  return { type: types.SET_CUSTOMER, customer };
}

export function requestPetshops() {
  return { type: types.REQUEST_PETSHOPS };
}

export function setPetshops(petshops) {
  return { type: types.SET_PETSHOPS, petshops };
}

export function setShopMapSelected(petshop) {
  return { type: types.SET_PETSHOP_MAP_SELECTED, petshop };
}

export function setMapCenter(location) {
  return { type: types.SET_MAP_CENTER, location };
}

export function requestPetshop(id) {
  return { type: types.REQUEST_PETSHOP, id };
}

export function setPetshop(petshop) {
  return { type: types.SET_PETSHOP, petshop };
}

export function toggleCartProduct(product) {
  return { type: types.TOGGLE_CART_PRODUCT, product };
}

export function setTransaction(transaction) {
  return { type: types.SET_TRANSACTION, transaction };
}

export function makePurchase() {
  return { type: types.MAKE_PURCHASE };
}
