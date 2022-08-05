import { createReducer, on } from '@ngrx/store';
import { CounterState } from 'src/states/counter.state';
import * as CounterActions from 'src/actions/counter.action';

const initialState: CounterState={
    count:0
}

export const counterReducer=createReducer(initialState,
    on(CounterActions.increment,(state)=>({
        count: state.count +1,
    })),
    on(CounterActions.decrement,(state)=>({
        count: state.count -1,
    }))
    )