import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumModule } from './album/album.module';


@NgModule({
  declarations: [
    BrowserModule,
    AppComponent,
    AlbumModule,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AlbumModule,
  ],
  bootstrap: [AppComponent]
})
