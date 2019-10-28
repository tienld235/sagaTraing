import { INCREASE, DECREASE } from './actionTypes';

export const increaseAction = (step) => ({
    type: INCREASE,
    step,
})

export const decreaseAction = (step) => ({
    type: DECREASE,
    step,
})