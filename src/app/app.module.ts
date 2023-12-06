import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumModule } from './album/album.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AlbumModule],
  bootstrap: [AppComponent],
})
export class appModule {}
