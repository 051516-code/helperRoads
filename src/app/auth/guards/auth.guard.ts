import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/authFake.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const isAuth = this.authService.isAuthenticated();

    if (isAuth) {
      // Si está autenticado, permite el acceso
      // this.router.navigate(['helperRoads/mobile']);
      return true;
    } else {
      // Si no está autenticado, redirige a la página de autenticación
      this.router.navigate(['helperRoads/auth']);
      return false;
    }
  }
}
