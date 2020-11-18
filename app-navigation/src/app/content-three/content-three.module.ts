import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentThreeComponent } from './content-three.component';
import { ContentThreeRoutingModule } from './content-three-routing.module';

@NgModule({
  declarations: [ContentThreeComponent],
  imports: [CommonModule, ContentThreeRoutingModule],
})
export class ContentThreeModule {}
