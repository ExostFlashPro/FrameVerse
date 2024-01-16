export class Album {
  Id: number;
  Titre: string;
  SousTitre: string;

  NbrPages: number;
  papier: string;
  grammage: number;
  date: Date;

  constructor(id: number, titre: string) {
    this.Id = id;
    this.Titre = titre;
    this.SousTitre = '';

    this.NbrPages = 80;
    this.papier = '';
    this.grammage = 80;

    this.date = new Date();
  }
}
