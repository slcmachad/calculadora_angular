import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent {

  @Input() currentFunction: string = '';

}
