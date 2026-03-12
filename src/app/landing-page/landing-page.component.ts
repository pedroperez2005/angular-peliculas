import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from '../peliculas/listado-peliculas/listado-peliculas.component';

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.cartelera = [
        {
          nombre: 'Spider-Man: No Way Home',
          fechaEstreno: new Date('2021-12-14'),
          precio: 80,
          poster:
            'https://www.dondeir.com/wp-content/uploads/2021/11/poster-oficial-spider-man-no-way-home-768x960.jpg',
        },
        {
          nombre: 'Avengers: Endgame',
          fechaEstreno: new Date('2019-04-23'),
          precio: 50,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
        },
      ];
      this.proximosEstrenos = [
        {
          nombre: 'Sonic 3',
          fechaEstreno: new Date('2024-12-26'),
          precio: 70,
          poster:
            'https://viernesmagazine.com.mx/wp-content/uploads/2024/11/Sonic-3-819x1024.jpg',
        },
        {
          nombre: 'Karate Kid: Legends',
          fechaEstreno: new Date('2024-05-31'),
          precio: 90,
          poster:
            'https://m.media-amazon.com/images/I/71Ay70VV5lL._UF894,1000_QL80_.jpg',
        },
      ];
    }, 1000);
  }

  cartelera!: any[];
  proximosEstrenos!: any[];

  procesarVoto(voto: number): void {}
}
