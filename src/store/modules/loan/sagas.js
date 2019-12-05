import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
// import { formatPrice } from '../../../util/format';

import { loadSuccess } from './actions';

function* load() {
  // ...
}

export default all([takeLatest('@loan/LOAD_REQUEST', load)]);
