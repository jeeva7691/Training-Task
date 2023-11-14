import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeComponent } from './prime/prime.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
