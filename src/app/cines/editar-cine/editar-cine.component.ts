import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.scss',
})
export class EditarCineComponent {
  @Input({ transform: numberAttribute }) id!: number;

  cine: CineDTO = { id: 1, nombre: 'Cinépolis Pablo Livas', latitud: 25.662571447346767, longitud: -100.20406196339545 };

  guardarCambios(cine: CineCreacionDTO) {
    console.log('Editar cine', cine);
  }
}
