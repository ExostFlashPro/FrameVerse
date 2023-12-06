import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  nom: string;
  prenom: string;

  onSubmit() {
    console.log('Nom:', this.nom);
    console.log('Prénom:', this.prenom);
    // Ajoutez ici la logique pour traiter les données du formulaire
  }
}
