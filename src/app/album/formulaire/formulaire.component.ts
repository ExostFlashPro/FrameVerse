import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  nom: string = '';
  prenom: string = '';

  ngOnInit() {
    // Initialization code here
  }

  onSubmit() {
    console.log('Nom:', this.nom);
    console.log('Prénom:', this.prenom);
  }
}
