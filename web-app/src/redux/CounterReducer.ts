import {DECREMENT, INCREMENT} from "./ActionConfig";

interface CounterState {
    count: number;
}

type CounterAction = { type: typeof INCREMENT } | { type: typeof DECREMENT };

const initialState: CounterState = {
    count: 0,
};

const counterReducer = (state = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case INCREMENT:
            console.log('Count changed:', state.count);
            return { count: state.count + 1 };
        case DECREMENT:
            console.log('Count changed:', state.count);
            return { count: state.count - 1 };
        default:
            console.log('Count changed:', state.count);
            return state;
    }

};

export default counterReducer;