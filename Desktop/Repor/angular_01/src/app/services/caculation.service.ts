import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaculationService {
  ValueView="";
  currentNumber: any;
  firstOperand: any;
  operator:any;
  waitForSecondNumber = false;
  constructor() { }
  callbacks: any[] = [];
  public doCalculation(op: string , secondOp: number){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }
  setOnChangeResult(callback: (value: number) => void): void {
    this.callbacks.push(callback);
  }

  setResult(result: number) {
    this.currentNumber = result;
    for (let callback of this.callbacks) {
      callback(this.currentNumber);
    }
  }
  
}

