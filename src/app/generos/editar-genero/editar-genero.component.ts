import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-genero',
  imports: [],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.scss',
})
export class EditarGeneroComponent {
  @Input({ transform: numberAttribute }) id!: number;
}
