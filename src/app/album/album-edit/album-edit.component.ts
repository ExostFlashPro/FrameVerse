import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css'], // Fix the typo here
})
export class AlbumEditComponent {
  profileForm = this.fb.group({
    firstName: ['Clément', [Validators.required, Validators.minLength(4)]],
    lastName: ['Moulis', [Validators.required]],
    address: this.fb.group({
      numero: [],
      street: [''],
      city: [''],
      codePostal: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}
}
