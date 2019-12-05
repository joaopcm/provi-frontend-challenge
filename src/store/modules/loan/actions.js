export function loadRequest() {
  return {
    type: '@loan/LOAD_REQUEST',
  };
}

export function loadSuccess(payload) {
  return {
    type: '@loan/LOAD_SUCCESS',
    payload,
  };
}

export function loadFailued() {
  return {
    type: '@loan/LOAD_FAILURE',
  };
}
