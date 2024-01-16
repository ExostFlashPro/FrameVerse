// album-edit.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css'],
})
export class AlbumEditComponent {
  profileForm: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      Titre: ['', [Validators.required, Validators.minLength(4)]],
      SousTitre: ['', [Validators.required]],
      type: this.fb.group({
        NbrPages: [],
        papier: [''],
        grammage: [''],
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
      this.model = new Album(0, 'Titre vide');
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
}
