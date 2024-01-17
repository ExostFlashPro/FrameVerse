import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumTypeEditComponent } from './album-type-edit/album-type-edit.component';
import { AlbumTypeListComponent } from './album-type-list/album-type-list.component';

@NgModule({
  declarations: [AlbumTypeEditComponent, AlbumTypeListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AlbumTypeEditComponent, AlbumTypeListComponent],
})
export class AlbumTypeModule {}
