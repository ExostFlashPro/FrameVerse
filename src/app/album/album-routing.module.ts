import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumAddComponent } from './album-add/album-add.component';

export const routes: Routes = [
  {
    path: 'create',
    pathMatch: 'full',
    component: AlbumAddComponent,
  },
  {
    path: 'edit/:id',
    component: AlbumEditComponent,
  },
  {
    path: 'display/:id',
    component: AlbumListComponent,
  },
  {
    path: '',
    component: AlbumListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
