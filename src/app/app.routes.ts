import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'album',
    loadChildren: () =>
      import('./album/album.module').then((m) => m.AlbumModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./accueil/accueil.module').then((m) => m.AccueilModule),
  },
];
