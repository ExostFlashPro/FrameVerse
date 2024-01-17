export class Album {
  Id: number | undefined;
  Titre: string;
  SousTitre: string;

  NbrPages: number;
  papier: string;
  grammage: number;
  date: Date;

  constructor(
    titre: string,
    soustitre: string,
    nbPage: number,
    papier: string,
    grammage: number
  ) {
    this.Titre = titre;
    this.SousTitre = soustitre;

    this.NbrPages = nbPage;
    this.papier = papier;
    this.grammage = grammage;

    this.date = new Date();
  }
}
