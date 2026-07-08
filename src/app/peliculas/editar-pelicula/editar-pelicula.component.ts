import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.scss',
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute }) id!: number;

  generosSeleccionados: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'Acción' }
  ];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 3, valor: 'Comedia' }
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'San Roque' }
  ];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Pablo Livas' },
    { llave: 3, valor: 'Valle Soleado' }
  ];


  pelicula: PeliculaDTO = {
    id: 1,
    titulo: 'Spider-Man',
    trailer: 'xyz',
    fechaLanzamiento: new Date('2021-12-21'),
    poster: 'https://www.dondeir.com/wp-content/uploads/2021/11/poster-oficial-spider-man-no-way-home-768x960.jpg',
  }

  actoresSeleccionados: ActorAutoCompleteDTO[] = [
    { id: 1, nombre: 'Tom Holland', personaje: 'Spider-Man', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/500px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg' },
  ]

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log('editando pelicula', pelicula)
  }
}
