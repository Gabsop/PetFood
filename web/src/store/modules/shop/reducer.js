import produce from "immer";
import types from "./types";

const INITIAL_STATE = {
  petshops: [],
  petshop: {},
  petshopMapSelected: null,
  mapCenter: {
    lat: -23.561684,
    lng: -46.625378,
  },
  cart: [],
  transactionFee: 0.1,
  defaultRecipient: {
    recipient_id: "re_ckovu4tt90b670h9tegnux63k",
    percentage: 10,
    liable: true,
  },
  transaction: {
    amount: 0,
    card_number: "",
    card_cvv: "",
    card_expiration_date: "",
    card_holder_name: "",
    customer: {},
    billing: {
      name: "Petfood LTDA",
      address: {
        country: "br",
        state: "sp",
        city: "Cotia",
        neighborhood: "Rio Cotia",
        street: "Rua Matrix",
        street_number: "9999",
        zipcode: "06714360",
      },
    },
    shipping: {},
    items: [],
    split_rules: [],
  },
};

function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_CUSTOMER: {
      return produce(state, (draft) => {
        draft.transaction.customer = action.customer;
      });
    }

    case types.SET_PETSHOPS: {
      return produce(state, (draft) => {
        draft.petshops = action.petshops;
      });
    }

    case types.SET_PETSHOP_MAP_SELECTED: {
      return produce(state, (draft) => {
        draft.petshopMapSelected = action.petshop;
      });
    }

    case types.SET_MAP_CENTER: {
      return produce(state, (draft) => {
        draft.mapCenter = action.location;
      });
    }

    case types.SET_PETSHOP: {
      return produce(state, (draft) => {
        draft.petshop = action.petshop;
      });
    }

    case types.TOGGLE_CART_PRODUCT: {
      return produce(state, (draft) => {
        const index = draft.cart.findIndex((p) => p._id === action.product._id);
        if (index !== -1) {
          draft.cart.splice(index, 1);
        } else {
          draft.cart.push(action.product);
        }
      });
    }

    case types.SET_TRANSACTION: {
      return produce(state, (draft) => {
        draft.transaction = { ...draft.transaction, ...action.transaction };
      });
    }

    default:
      return state;
  }
}

export default shop;
