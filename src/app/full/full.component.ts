import { Component } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent {
  currentFunction: string = 'NoFunction';

  calNumber: string = 'noValue';
  calValue: number = 0;

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickButton(event: {value: string, type: string}){
    const {value, type} = event;
    if(type === 'number'){
      this.onNumberClick(value);
    }else if( type === 'function'){
      this.onFunctionClick(value);
    }
  }

  onNumberClick(val: string){
    if(this.calNumber != 'noValue'){
      this.calNumber = this.calNumber + val;
    }else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string){

    if(val == 'C'){
      this.clearAll();
    } else if(this.currentFunction == 'NoFunction'){
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.currentFunction = val;
    } else if (this.currentFunction != 'NoFunction'){
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string){

    if(this.currentFunction == '+'){
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if(this.currentFunction == '-'){
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if(this.currentFunction == '*'){
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if(this.currentFunction == '/'){
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if(this.currentFunction == '%'){
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(total, val);
    }
  }

  totalAssignValues(total: number, val: string){
      this.calValue = total;
      this.firstNumber = total;
      this.secondNumber = 0;
      this.calNumber = 'noValue';
      this.currentFunction = val;
      if(val == '='){
        this.onEqualPress()
      }
  }

  onEqualPress(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.currentFunction = 'NoFunction';
    this.calNumber = 'noValue';
  }

  clearAll(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.currentFunction = 'NoFunction';
    this.calNumber = 'noValue';
  }

}


