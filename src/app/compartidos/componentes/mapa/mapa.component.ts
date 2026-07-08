import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, latLng, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent implements OnInit, OnChanges{
  ngOnInit(): void {
    this.actualizarMarcadores();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['coordenadasIniciales']) {
      this.actualizarMarcadores();
    }
  }

  @Input() coordenadasIniciales: Coordenada[] = [];
  @Output() coordenadaSeleccionada = new EventEmitter<Coordenada>();

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom: 14,
    center: latLng(25.64657630331518, -100.09110109876613)
  }

  capas: Marker<any>[] = [];

  private actualizarMarcadores(): void {
    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud], this.markerOptions));

    if (this.coordenadasIniciales.length > 0) {
      const coordenadaInicial = this.coordenadasIniciales[0];
      this.options = {
        ...this.options,
        center: latLng(coordenadaInicial.latitud, coordenadaInicial.longitud)
      };
    }
  }

  manejarClick(event: LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;

    this.capas = [];
    this.capas.push(marker([latitud, longitud], this.markerOptions));
    this.coordenadaSeleccionada.emit({latitud, longitud});
  }
}
