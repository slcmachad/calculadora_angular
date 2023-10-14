import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.css']
})
export class OperacoesComponent {


  @Output() buttonClicked: EventEmitter<{value: string, type: any}> = new EventEmitter<{value: string, type: any}>();

  onClickValue(value: string, type: any){
    this.buttonClicked.emit({value, type});
  }

}
