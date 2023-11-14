import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RFormsComponent } from './r-forms/r-forms.component';
import { TestRFormsComponent } from './test-r-forms/test-r-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    RFormsComponent,
    TestRFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
