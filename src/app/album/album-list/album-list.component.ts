import { Component } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css',
})
export class AlbumListComponent {
  listAlbum: Array<Album>;
  currentAlbum: Album | undefined;

  constructor() {
    this.listAlbum = new Array<Album>();
  }

  ngOnInit() {
    this.listAlbum.push(
      new Album(1, 'Vacances à la plage', 'Eté 2023', 150, 'Blanc', 80)
    );
    this.listAlbum.push(
      new Album(
        2,
        'Vacances à la montagne',
        'Eté 2023',
        150,
        'Blanc poudré',
        80
      )
    );
    this.listAlbum.push(
      new Album(3, 'Vacances au ski', 'Eté 2023', 150, 'Blanc', 80)
    );
    this.currentAlbum = this.listAlbum[0];
  }

  setCurrentAlbum(updatedAlbum: Album) {
    this.currentAlbum = undefined;
    setTimeout(() => {
      this.currentAlbum = updatedAlbum;
    }, 10);
  }

  updateList(updatedAlbum: Album) {
    let indexItem: number = this.listAlbum.findIndex(
      (A) => A.Id === updatedAlbum.Id
    );
    this.listAlbum[indexItem] = {
      ...this.listAlbum[indexItem],
      ...updatedAlbum,
    };
  }
}
