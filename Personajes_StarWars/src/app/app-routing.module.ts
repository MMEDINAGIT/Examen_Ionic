import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'desc-per', loadChildren: './desc-per/desc-per.module#DescPerPageModule' },
  { path: 'personaje', loadChildren: './personaje/personaje.module#PersonajePageModule' },
  { path: 'general-grevous', loadChildren: './general-grevous/general-grevous.module#GeneralGrevousPageModule' },
  { path: 'padme-amdala', loadChildren: './padme-amdala/padme-amdala.module#PadmeAmdalaPageModule' },
  { path: 'yoda', loadChildren: './yoda/yoda.module#YodaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
