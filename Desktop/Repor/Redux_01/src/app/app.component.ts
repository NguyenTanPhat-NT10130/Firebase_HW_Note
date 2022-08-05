import { Component } from '@angular/core';
import { CounterState } from '../states/counter.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../actions/counter.action';
import { CalculatorState } from 'src/states/calculator.state';
import { enterNumber } from 'src/actions/calculator.action';
import * as CalculatorActions from '../actions/calculator.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Redux_01';

  // count=0;
  // count$: Observable<number>;
  // constructor(private store:Store<{counter: CounterState}>){
  //   this.count$=this.store.select((state)=>state.counter.count);
  // }

  // increment(){
  //   this.store.dispatch(CounterActions.increment());
  // }
  // decrement(){
  //   this.store.dispatch(CounterActions.decrement());
  // }
  currentNumber$:Observable<string>;
  constructor(private store:Store<{calculator: CalculatorState}>){
    this.currentNumber$ = this.store.select((state) => state.calculator.currentNumber);
    console.log(this.currentNumber$);
  }
 
    enterNumber(number: string){
      this.store.dispatch(CalculatorActions.enterNumber({number: number}));
    }
    enterOperator(operator: string){
      this.store.dispatch(CalculatorActions.enterOperator({operator: operator}));
    }
    
}

 

