import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
  declarations: [AlbumEditComponent, AlbumListComponent],
  imports: [CommonModule],
  exports: [AlbumEditComponent, AlbumListComponent],
})
export class AlbumModule {}
