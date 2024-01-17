import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumRoutingModule } from './album-routing.module';

@NgModule({
  declarations: [AlbumEditComponent, AlbumListComponent],
  imports: [CommonModule, ReactiveFormsModule, AlbumRoutingModule],
  exports: [AlbumEditComponent, AlbumListComponent],
})
export class AlbumModule {}
