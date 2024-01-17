import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Album } from '../album.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { liveQuery, Observable } from 'dexie';
import { db } from '../../../indexed.db';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.css'],
})
export class AlbumAddComponent implements OnInit {
  profileForm: FormGroup;

  submitted = false;
  submitted2 = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: AlbumService
  ) {
    this.profileForm = this.fb.group({
      Titre: ['Nom de lalbum', [Validators.required, Validators.minLength(4)]],
      SousTitre: ["Sous-titre de l'album", [Validators.required]],
      type: this.fb.group({
        NbrPages: [
          55,
          [Validators.required, Validators.min(0), Validators.max(200)],
        ],
        papier: ['Blanc'],
        grammage: [
          80,
          [Validators.required, Validators.min(0), Validators.max(150)],
        ],
      }),
      date: [null, [Validators.required]],
    });
  }

  @Input()
  model: Album | null = null;
  @Output()
  emitAlbum: EventEmitter<Album> = new EventEmitter<Album>();

  ngOnInit() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    console.log('submitted');
    if (this.profileForm.valid) {
      console.log('isvalid');
      this.model = { ...this.model!, ...this.profileForm.value };
      this.model!.NbrPages = this.profileForm.get('type')!.value.NbrPages;
      this.model!.papier = this.profileForm.get('type')!.value.papier;
      this.model!.grammage = this.profileForm.get('type')!.value.grammage;
      this.emitAlbum.emit(this.model!);
    }
  }

  resetForm() {
    if (this.model !== null) {
      this.profileForm.patchValue(this.model);
    }
  }

  Validation() {
    console.log('Enregistré');
    this.service.addAlbum(this.model!);
    this.submitted2 = true;
  }

  listAlbumS: Observable<Array<Album>> = liveQuery(() => this.getAllAlbums());
  async getAllAlbums(): Promise<Array<Album>> {
    return await db.albums.where({}).toArray();
  }
}
