// album-edit.component.ts

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Album } from '../album.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { liveQuery, Observable } from 'dexie';
import { db } from '../../../indexed.db';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css'],
})
export class AlbumEditComponent implements OnInit {
  profileForm: FormGroup;

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: AlbumService
  ) {
    this.profileForm = this.fb.group({
      Titre: ['', [Validators.required, Validators.minLength(4)]],
      SousTitre: ['', [Validators.required]],
      type: this.fb.group({
        NbrPages: [
          [Validators.required],
          [Validators.min(0), Validators.max(200)],
        ],
        papier: [''],
        grammage: [
          [Validators.required],
          [Validators.min(0), Validators.max(150)],
        ],
      }),
      date: [
        null,
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
    });
  }

  @Input()
  model: Album | null = null;
  @Output()
  emitAlbum: EventEmitter<Album> = new EventEmitter<Album>();

  ngOnInit() {
    this.submitted = false;

    if (this.model === null) {
      this.route.paramMap.subscribe((params) => {
        if (params.has('id')) {
          let idAlbum = (params.get('id') ?? 0) as number;
          this.service.getById(idAlbum)!.then((res) => {
            if (res) {
              this.model = res;

              this.profileForm.patchValue(this.model!);

              this.profileForm.get('type')!.patchValue({
                NbrPages: res.NbrPages,
                papier: res.papier,
                grammage: res.grammage,
              });
            }
          });
        }
      });
    } else {
      this.profileForm.patchValue(this.model);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.profileForm.valid) {
      this.model = { ...this.model!, ...this.profileForm.value };
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
    this.service.updtAlbum(this.model!);
  }

  listAlbumS: Observable<Array<Album>> = liveQuery(() => this.getAllAlbums());
  async getAllAlbums(): Promise<Array<Album>> {
    return await db.albums.where({}).toArray();
  }
}
