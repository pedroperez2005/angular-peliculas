import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';

@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.scss'
})
export class FormularioActoresComponent implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  @Input() modelo?: ActorDTO;
  @Output() posteoFormulario = new EventEmitter<ActorCreacionDTO>;

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    fechaNacimiento: new FormControl<Date | null>(null)
  })

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }
    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    this.posteoFormulario.emit(actor);
  }
}
