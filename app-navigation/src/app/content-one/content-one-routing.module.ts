import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentOneComponent } from './content-one.component';

const routes: Routes = [
  {
    path: '',
    component: ContentOneComponent,
    children: [
      {
        path: 'element-one',
        loadChildren: () =>
          import('./../element-one-detail/element-one-detail.module').then(
            (m) => m.ElementOneDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentOneRoutingModule {}
