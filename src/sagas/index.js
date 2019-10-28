import { all, delay } from 'redux-saga/effects';

import { swear } from './counterSagas';

export default function rootSaga(){
    yield all([
        swear
    ]);
}