import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumService } from './album.service';

@NgModule({
  declarations: [AlbumEditComponent, AlbumListComponent],
  imports: [CommonModule, ReactiveFormsModule, AlbumRoutingModule],
  exports: [AlbumEditComponent, AlbumListComponent],
  providers: [AlbumService],
})
export class AlbumModule {}
