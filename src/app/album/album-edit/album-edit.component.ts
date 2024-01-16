// album-edit.component.ts

import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
      firstName: ['Clément', [Validators.required, Validators.minLength(4)]],
      lastName: ['Moulis', [Validators.required]],
      address: this.fb.group({
        numero: [50],
        street: ['rue'],
        city: ['Blagnac'],
        codePostal: ['31700'],
      }),
    });
  }

  onSubmit() {
    this.submitted = true;
  }
}
