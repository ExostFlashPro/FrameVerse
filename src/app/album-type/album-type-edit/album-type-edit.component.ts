// album-edit.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlbumType } from '../album-type.model';

@Component({
  selector: 'app-album-type-edit',
  templateUrl: './album-type-edit.component.html',
  styleUrls: ['./album-type-edit.component.css'],
})
export class AlbumTypeEditComponent {
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
  model: AlbumType | null = null;
  @Output()
  emitAlbum: EventEmitter<AlbumType> = new EventEmitter<AlbumType>();

  ngOnInit() {
    this.submitted = false;

    if (this.model === null) {
      this.model = new AlbumType(
        0,
        'Titre vide',
        'pas de description',
        200,
        'noir',
        90
      );
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
