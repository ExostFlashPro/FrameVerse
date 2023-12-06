import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    BrowserModule, // Add this line
    AppComponent,
    FormulaireComponent,
    // ...
  ],
  imports: [
    FormsModule,
    BrowserModule,
    // ...
  ],
  bootstrap: [AppComponent]
})
