import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTwoComponent } from './content-two.component';
import { ContentTwoRoutingModule } from './content-two-routing.module';

@NgModule({
  declarations: [ContentTwoComponent],
  imports: [CommonModule, ContentTwoRoutingModule],
})
export class ContentTwoModule {}
