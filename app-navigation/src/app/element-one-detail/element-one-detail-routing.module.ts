import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementOneDetailComponent } from './element-one-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ElementOneDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementOneDetailRoutingModule {}
