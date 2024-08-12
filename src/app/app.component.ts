import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/authFake.service';
import { Register } from './auth/interfaces/register.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  isAuthenticated: boolean = false;
  user: Register | null = null; 

  constructor(
    private authService : AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (this.isAuthenticated) {
      const userString = this.authService.whoIm();
    this.user = userString ? JSON.parse(userString) : null; 
    }
  }

  goToLogout() {
    this.authService.logout();

    // Redirige al usuario a la página de autenticación
    this.router.navigate(['helperRoads/auth']).then(() => {
      // Después de la navegación, recarga la página
      window.location.reload();
    }).catch(err => {
      // Maneja cualquier error que pueda ocurrir durante la navegación
      console.error('Error during navigation:', err);
    });
  }

  goToCompanyMode(){
    this.router.navigate(['helperRoads/company-mode'])
  }

  goToProfile(){
    this.router.navigate(['helperRoads/user'])
  }
  
}
