import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

function* load() {
  try {
    const { data } = yield call(api.get, '/');

    yield put(loadSuccess(data));
  } catch (_) {
    toast.error('Não foi possível carregar os seus empréstimos');
    yield put(loadFailure());
  }
}

export default all([takeLatest('@loan/LOAD_REQUEST', load)]);
