import { Component } from '@angular/core';
import { AlbumType } from '../album-type.model';

@Component({
  selector: 'app-album-type-list',
  templateUrl: './album-type-list.component.html',
  styleUrl: './album-type-list.component.css',
})
export class AlbumTypeListComponent {
  listAlbum: Array<AlbumType>;
  currentAlbum: AlbumType | undefined;

  constructor() {
    this.listAlbum = new Array<AlbumType>();
  }

  ngOnInit() {
    this.listAlbum.push(
      new AlbumType(1, 'Vacances à la plage', 'Eté 2023', 150, 'Blanc', 80)
    );
    this.listAlbum.push(
      new AlbumType(
        2,
        'Vacances à la montagne',
        'Eté 2023',
        150,
        'Blanc poudré',
        80
      )
    );
    this.listAlbum.push(
      new AlbumType(3, 'Vacances au ski', 'Eté 2023', 150, 'Blanc', 80)
    );
    this.listAlbum.push(
      new AlbumType(4, 'Noël 2023', 'Avec la famille', 150, 'Noir', 80)
    );
    this.listAlbum.push(
      new AlbumType(5, 'Nouvel an', 'Avec les copains', 150, 'Noir', 80)
    );
    this.currentAlbum = this.listAlbum[0];
  }

  setCurrentAlbum(updatedAlbum: AlbumType) {
    this.currentAlbum = undefined;
    setTimeout(() => {
      this.currentAlbum = updatedAlbum;
    }, 10);
  }

  updateList(updatedAlbum: AlbumType) {
    let indexItem: number = this.listAlbum.findIndex(
      (A) => A.Id === updatedAlbum.Id
    );
    this.listAlbum[indexItem] = {
      ...this.listAlbum[indexItem],
      ...updatedAlbum,
    };
  }
}
