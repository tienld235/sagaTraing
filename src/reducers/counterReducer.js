import { DECREASE, INCREASE } from '../actions/actionTypes';

const counterReducer= (count = 0, action) => {
    switch (action.type) {
        case INCREASE:
            return count + action.step;
            break;
        case DECREASE:
            return count - action.step;
            break;
        default:
            return count;
            break;
    }
}

export default counterReducer;