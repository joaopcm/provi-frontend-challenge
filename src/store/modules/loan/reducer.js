import produce from 'immer';

const INITIAL_STATE = {
  installments: [],
  UserId: null,
  amountTake: null,
  amountPayd: null,
  monthlyInterest: null,
  totalAmountInTaxes: null,
  loading: false,
};

export default function loan(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@loan/ADD_SUCCESS':
      return produce(state, draft => {
        // ...
      });
    case '@loan/REMOVE':
      return produce(state, draft => {
        // ...
      });
    case '@loan/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        // ...
      });
    }
    default:
      return state;
  }
}
