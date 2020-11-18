import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './frame.component';

const routes: Routes = [
  {
    path: 'frame',
    component: FrameComponent,
    children: [
      {
        path: 'content-one',
        loadChildren: () =>
          import('./../content-one/content-one.module').then(
            (m) => m.ContentOneModule
          ),
      },
      {
        path: 'content-two',
        loadChildren: () =>
          import('./../content-two/content-two.module').then(
            (m) => m.ContentTwoModule
          ),
      },
      {
        path: 'content-three',
        loadChildren: () =>
          import('./../content-three/content-three.module').then(
            (m) => m.ContentThreeModule
          ),
      },
      {
        path: '',
        redirectTo: '/content-one',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/frame',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrameRoutingModule {}
