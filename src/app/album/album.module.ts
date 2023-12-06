import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [FormulaireComponent, ListComponent],
  imports: [CommonModule],
  exports: [FormulaireComponent, ListComponent],
})
export class AlbumModule {}
