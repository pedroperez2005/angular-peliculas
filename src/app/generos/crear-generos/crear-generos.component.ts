import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-crear-generos',
  imports: [
    FormularioGeneroComponent
  ],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.scss',
})
export class CrearGenerosComponent {
  // se utiliza private para no utilizarlos accidentalmente en el template
  private router = inject(Router);

  guardarCambios(genero: GeneroCreacionDTO) {
    console.log('Creando el género ', genero);
  }
}
