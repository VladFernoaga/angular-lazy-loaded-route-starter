import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FrameRoutingModule } from './frame-routing.module';
import { FrameComponent } from './frame.component';

@NgModule({
  declarations: [FrameComponent],
  imports: [CommonModule, FrameRoutingModule],
})
export class FrameModule {}
