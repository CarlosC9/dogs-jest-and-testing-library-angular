import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dogs',
    loadComponent: () => import('@app/Dogs/components/dogs-page/dogs-page.component').then(x => x.DogsPageComponent)
  }
];
