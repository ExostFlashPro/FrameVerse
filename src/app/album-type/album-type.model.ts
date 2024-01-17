export class AlbumType {
  Id: number;
  Titre: string;
  SousTitre: string;

  NbrPages: number;
  papier: string;
  grammage: number;
  date: Date;

  constructor(
    id: number,
    titre: string,
    soustitre: string,
    nbPage: number,
    papier: string,
    grammage: number
  ) {
    this.Id = id;
    this.Titre = titre;
    this.SousTitre = soustitre;

    this.NbrPages = nbPage;
    this.papier = papier;
    this.grammage = grammage;

    this.date = new Date();
  }
}
