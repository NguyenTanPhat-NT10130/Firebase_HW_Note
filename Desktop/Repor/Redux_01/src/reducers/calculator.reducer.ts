import { createReducer, on } from "@ngrx/store";
import { CalculatorState } from "src/states/calculator.state";
import * as CalculatorActions from "src/actions/calculator.action"


export const initialState: CalculatorState = {
    currentNumber: '',
    previousNumber: '',
    operator: '',
}

export const calculatorReducer = createReducer(
    initialState,
    on(CalculatorActions.enterNumber, (state, action) => {
        let newState = { ...state };
        if (action.number == '.') {
            if (!state.currentNumber.includes('.')) {
                newState.currentNumber = state.currentNumber + '.';
            }
            return newState;
        }
        newState.currentNumber = state.currentNumber + action.number;
        return newState;
    }),
    on(CalculatorActions.enterOperator, (state, action) => {
        if (action.operator == '+/-') { //Đổi từ dương sang âm hoặc ngược lại
            return {
                ...state,
                currentNumber: (parseFloat(state.currentNumber) * -1).toString()
            }
        }
        if (action.operator == '%') {
            return {
                ...state,
                currentNumber: (parseFloat(state.currentNumber) / 100).toString()
            }
        }
        if (action.operator == 'C') {
            return {
                ...state,
                currentNumber: '',
                previousNumber: '',
                operator: ''
            }
        }
        if (action.operator == 'DEL') {
            return {
                ...state,
                currentNumber: state.currentNumber.slice(0, state.currentNumber.length - 1)
            }
        }
        if (action.operator == '=') {
            let result = 0;
            if (state.operator == '+') {
                result = parseFloat(state.previousNumber) + parseFloat(state.currentNumber);
            } else if (state.operator == '-') {
                result = parseFloat(state.previousNumber) - parseFloat(state.currentNumber);
            } else if (state.operator == '') {
                result = parseFloat(state.previousNumber)  * parseFloat(state.currentNumber);
            } else if (state.operator == "/") {
                result = parseFloat(state.previousNumber) / parseFloat(state.currentNumber);
            }
            return {
                ...state,
                currentNumber: result.toString(),
               
            };
           
        } else {
            return {
                ...state,
                previousNumber: state.currentNumber,
                operator: action.operator,
                currentNumber: ''
            };
            
        }
      
    })
   
);
