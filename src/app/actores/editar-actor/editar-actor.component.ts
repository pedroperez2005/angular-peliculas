import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.scss',
})
export class EditarActorComponent {
  @Input({ transform: numberAttribute }) id!: number;

  actor: ActorDTO = {
    id: 1,
    nombre: 'Tom Holland',
    fechaNacimiento: new Date(1996, 5, 1), // 01-06-1996
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/500px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'
  }

  guardarCambios(actor: ActorCreacionDTO) {
    console.log('Editando el actor', actor);
  }
}
