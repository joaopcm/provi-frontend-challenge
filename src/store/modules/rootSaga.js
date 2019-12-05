import { all } from 'redux-saga/effects';

import loan from './loan/sagas';

export default function* rootSata() {
  return yield all([loan]);
}
