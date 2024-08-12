import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
})
export class MostPopularComponent  implements OnInit {
  @Input() avatars: string[] = []; // Lista de URLs de avatares

  swiperConfig = {
    slidesPerView: 4, // Muestra tres slides por vista
    spaceBetween: 10, // Espacio entre los slides
    loop: true, // Habilita el loop para que el carrusel se repita
    autoplay: {
      delay: 3000, // Tiempo en milisegundos entre cada slide (3 segundos)
      disableOnInteraction: false, // No desactiva el autoplay al interactuar con el Swiper
    },
    pagination: { clickable: true }, // Habilita la paginación clickable
    navigation: true // Habilita los botones de navegación
  };

  
   constructor(private router: Router) { }

  ngOnInit() {}

  navigateToPage(index: number) {
    // Aquí puedes definir la lógica para redirigir a una página basada en el índice o en alguna lógica
    // Por ejemplo:
    console.log('perfil most popular')
    this.router.navigate([`helperRoads/mobile/company-profile/${index}`]); // Reemplaza con la ruta deseada
  }

}
