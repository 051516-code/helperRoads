import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  showSplash = true;
  showOverlay = false;
  
  constructor(
    private router : Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.showOverlay = true; // Mostrar la capa de transición
      setTimeout(() => {
        
        this.showSplash = false; // Ocultar la splash screen

      }, 500); // Tiempo para que la capa de transición se muestre
      this.router.navigate(['helperRoads/auth'])
    }, 2000); // Tiempo de duración de la animación de splash screen
  }
}
