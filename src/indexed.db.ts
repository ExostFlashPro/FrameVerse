import Dexie, { Table } from 'dexie';
import { Album } from './app/album/album.model';

export class IndexedDb extends Dexie {
  albums!: Table<Album, number>; // Type du contenu, Type de la PrimaryKey
  constructor() {
    super('dbName'); // On choisit le nom du Singleton
    this.version(1).stores({
      albums: '++Id', // On initialise l'id du 1er item de la table
    });
    this.on('populate', () => this.maSuperFonction());
  }

  async maSuperFonction() {
    await db.albums.bulkAdd([
      new Album('Vacances à la plage', 'Été 2023', 150, 'Blanc', 80),
      new Album('Vacances à la montagne', 'Été 2023', 150, 'Blanc poudré', 80),
      new Album('Vacances au ski', 'Été 2023', 150, 'Blanc', 80),
      new Album('Noël 2023', 'Avec la famille', 150, 'Noir', 80),
      new Album('Nouvel an', 'Avec les copains', 150, 'Noir', 80),
    ]);
  }
}
export const db = new IndexedDb();
