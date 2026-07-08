import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPelicula } from './filtroPelicula';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoGenericoComponent, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.scss'
})
export class FiltroPeliculasComponent implements OnInit {
  ngOnInit(): void {
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value as FiltroPelicula);
    this.form.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores as FiltroPelicula);
      this.escribirParametrosBusquedaEnURL(valores as FiltroPelicula);
    });
  }

  buscarPeliculas(valores: FiltroPelicula) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if (valores.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  escribirParametrosBusquedaEnURL(valores: FiltroPelicula) {
    let queryStrings = [];

    if (valores.titulo) {
      queryStrings.push(`titulo=${encodeURIComponent(valores.titulo)}`);
    }

    if (valores.generoId !== 0) {
      queryStrings.push(`generoId=${valores.generoId}`);
    }

    if(valores.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valores.proximosEstrenos}`);
    }

    if(valores.enCines){
      queryStrings.push(`enCines=${valores.enCines}`);
    }

    this.location.replaceState('peliculas/filtrar', queryStrings.join('&'));
  }

  leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params: any) => {
      var objeto: any = {};

      if(params.titulo){
        objeto.titulo = params.titulo;
      }

      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }

      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if(params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);
    })
  }

  limpiar() {
    this.form.patchValue({
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false
    })
  }

  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  })

  generos = [
    { id: 1, nombre: "Drama" },
    { id: 2, nombre: "Acción" },
    { id: 3, nombre: "Comedia" },
  ];

  peliculasOriginal = [
    {
      titulo: 'Spider-Man: No Way Home',
      fechaLanzamiento: new Date('2021-12-14'),
      precio: 80,
      poster:
        'https://www.dondeir.com/wp-content/uploads/2021/11/poster-oficial-spider-man-no-way-home-768x960.jpg',
      generos: [1, 2, 3],
      proximosEstrenos: false,
      enCines: true
    },
    {
      titulo: 'Avengers: Endgame',
      fechaLanzamiento: new Date('2019-04-23'),
      precio: 50,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
      generos: [1, 2],
      proximosEstrenos: true,
      enCines: false
    },
    {
      titulo: 'Sonic 3',
      fechaLanzamiento: new Date('2024-12-26'),
      precio: 70,
      poster:
        'https://viernesmagazine.com.mx/wp-content/uploads/2024/11/Sonic-3-819x1024.jpg',
      generos: [2, 3],
      proximosEstrenos: false,
      enCines: true
    },
    {
      titulo: 'Karate Kid: Legends',
      fechaLanzamiento: new Date('2024-05-31'),
      precio: 90,
      poster:
        'https://m.media-amazon.com/images/I/71Ay70VV5lL._UF894,1000_QL80_.jpg',
      generos: [1, 2, 3],
      proximosEstrenos: true,
      enCines: false
    },
  ];

  peliculas = this.peliculasOriginal;
}
