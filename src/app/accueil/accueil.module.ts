import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import { AccueilRoutingModule } from './accueil-routing.module';

@NgModule({
  declarations: [PresentationComponent],
  imports: [CommonModule, AccueilRoutingModule],
  exports: [PresentationComponent],
})
export class AccueilModule {}
