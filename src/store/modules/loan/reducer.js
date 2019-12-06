import produce from 'immer';

const INITIAL_STATE = {
  installments: [],
  amountTake: null,
  amountPayd: null,
  monthlyInterest: null,
  totalAmountInTaxes: null,
  loading: false,
};

export default function loan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@loan/LOAD_REQUEST': {
        draft.loading = true;

        break;
      }

      case '@loan/LOAD_SUCCESS': {
        draft.installments = action.payload.installments;
        draft.amountTaken = action.payload.amountTaken;
        draft.amountPayd = action.payload.amountPayd;
        draft.monthlyInterest = action.payload.monthlyInterest;
        draft.totalAmountInTaxes = action.payload.totalAmountInTaxes;
        draft.loading = false;

        break;
      }

      case '@loan/LOAD_FAILURE': {
        draft.loading = false;

        break;
      }

      default:
    }
  });
}
