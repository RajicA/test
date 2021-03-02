import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceholderComponent } from './placeholder.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceholderComponent,
  },
  {
    path: 'patients',
    loadChildren: () => import('./+patient/patient.module').then((m) => m.PatientModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
