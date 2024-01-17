import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css',
})
export class AlbumListComponent implements OnInit {
  listAlbum: Array<Album>;
  currentAlbum: Album | undefined;

  constructor(private router: Router, private service: AlbumService) {
    this.listAlbum = new Array<Album>();
  }

  ngOnInit() {
    this.service.getAllAlbums().subscribe((resliste) => {
      this.listAlbum = resliste;
      if (this.listAlbum.length > 0) {
        this.currentAlbum = this.listAlbum.at(0);
      }
    });
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
