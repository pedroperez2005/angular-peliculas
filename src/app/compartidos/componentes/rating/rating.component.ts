import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIcon, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  // se recibe un número 'value' en maximoRating, luego,
  // maximoRating se transforma en un Array con tamaño 'value' y se llena, inicialmente, de 0's
  @Input({ required: true, transform: (value: number) => Array(value).fill(0) })
  maximoRating!: number[];
  @Input() ratingSeleccionado = 0;

  @Output() votado = new EventEmitter<number>();

  ratingAnterior = 0;

  handleMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }

  handleMouseLeave(): void {
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else {
      this.ratingSeleccionado = 0;
    }
  }

  handleClick(index: number): void {
    this.ratingSeleccionado = index + 1;
    this.ratingAnterior = this.ratingSeleccionado;
    this.votado.emit(this.ratingSeleccionado);
  }
}
