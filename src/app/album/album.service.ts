import { from, Observable, of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Album } from './album.model';

@Injectable()
export class AlbumService {
  mockAlbumList: Array<Album> = [
    new Album(1, 'Vacances à la plage', 'Eté 2023', 150, 'Blanc', 80),
    new Album(2, 'Vacances à la montagne', 'Eté 2023', 150, 'Blanc poudré', 80),
    new Album(3, 'Vacances au ski', 'Eté 2023', 150, 'Blanc', 80),
    new Album(4, 'Noël 2023', 'Avec la famille', 150, 'Noir', 80),
    new Album(5, 'Nouvel an', 'Avec les copains', 150, 'Noir', 80),
  ];

  getAllAlbums(): Observable<Array<Album>> {
    return of(this.mockAlbumList).pipe(delay(1000));
  }
}
