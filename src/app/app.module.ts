import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './full/full.component';
import { FunctionsComponent } from './full/screen/functions/functions.component';
import { NumbersComponent } from './full/screen/numbers/numbers.component';
import { OperacoesComponent } from './full/screen/operacoes/operacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    FunctionsComponent,
    NumbersComponent,
    OperacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
