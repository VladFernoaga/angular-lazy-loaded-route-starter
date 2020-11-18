import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentThreeComponent } from './content-three.component';

const routes: Routes = [
  {
    path: '',
    component: ContentThreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentThreeRoutingModule {}
