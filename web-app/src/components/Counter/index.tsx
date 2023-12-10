import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from '../../redux/ActionConfig';

interface CounterProps {
    count: number;
    type: string;
    increment: () => void;
    decrement: () => void;
}

const Counter= ({ count, increment, decrement, type }: CounterProps) => (
    <div>
        <p>Count: {count}</p>
        {type === 'edit' &&
            (<div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>)
        }
    </div>
);

const mapStateToProps = (state: { counter: CounterProps }) => ({
    count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Function) => ({
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);