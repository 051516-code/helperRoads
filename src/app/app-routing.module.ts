import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'helperRoads/auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
  path: 'helperRoads/map',
  loadChildren: () => import('./principal-config/principal-config.module').then( m => m.PrincipalConfigPageModule),
  canActivate: [AuthGuard]  // Aplicar el guardia a esta ruta
  },
  {
    path: 'helperRoads/company-mode',
    loadChildren: () => import('./company-mode/company-mode.module').then( m => m.CompanyModePageModule)
  },
  {
    path: 'helperRoads/user',
    loadChildren: () => import('./user-section/user-section.module').then( m => m.UserSectionPageModule)
  },
  {
    path: '**',
    redirectTo: 'splash'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
