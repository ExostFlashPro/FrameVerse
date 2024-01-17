// album.service.ts

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { db } from '../../indexed.db';

@Injectable()
export class AlbumService {
  //mockAlbumList: Array<Album>;

  constructor() {
    /*this.mockAlbumList = [
      new Album(1, 'Vacances à la plage', 'Été 2023', 150, 'Blanc', 80),
      new Album(
        2,
        'Vacances à la montagne',
        'Été 2023',
        150,
        'Blanc poudré',
        80
      ),
      new Album(3, 'Vacances au ski', 'Été 2023', 150, 'Blanc', 80),
      new Album(4, 'Noël 2023', 'Avec la famille', 150, 'Noir', 80),
      new Album(5, 'Nouvel an', 'Avec les copains', 150, 'Noir', 80),
    ];*/
  }

  async getAllAlbums(): Promise<Array<Album>> {
    return db.table('albums').toArray();
  }

  async addAlbum(album: Album) {
    await db.albums.add({ ...album });
    console.log('Album ajouté avec succès.');
  }

  async updtAlbum(album: Album) {
    await db.albums.put({ ...album });
    console.log('Album mis à jour avec succès.');
  }

  async getById(idAlbum: number) {
    const res = db.albums.get(Number.parseInt(idAlbum.toString()));
    return res;
  }
}
