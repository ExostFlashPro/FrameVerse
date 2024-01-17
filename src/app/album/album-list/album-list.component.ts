import { Component } from '@angular/core';
import { Album } from '../album.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css',
})
export class AlbumListComponent {
  listAlbum: Array<Album>;
  currentAlbum: Album | undefined;

  constructor(private router: Router) {
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
    this.listAlbum.push(
      new Album(4, 'Noël 2023', 'Avec la famille', 150, 'Noir', 80)
    );
    this.listAlbum.push(
      new Album(5, 'Nouvel an', 'Avec les copains', 150, 'Noir', 80)
    );
    this.currentAlbum = this.listAlbum[0];
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
