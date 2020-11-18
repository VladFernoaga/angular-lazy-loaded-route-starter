import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentOneComponent } from './content-one.component';
import { ContentOneRoutingModule } from './content-one-routing.module';

@NgModule({
  declarations: [ContentOneComponent],
  imports: [CommonModule, ContentOneRoutingModule],
})
export class ContentOneModule {}
