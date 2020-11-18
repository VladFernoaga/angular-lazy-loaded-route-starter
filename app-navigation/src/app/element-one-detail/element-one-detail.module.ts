import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementOneDetailComponent } from './element-one-detail.component';
import { ElementOneDetailRoutingModule } from './element-one-detail-routing.module';

@NgModule({
  declarations: [ElementOneDetailComponent],
  imports: [CommonModule, ElementOneDetailRoutingModule],
})
export class ElementOneDetailModule {}
