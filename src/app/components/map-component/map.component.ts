// src/app/map/map.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { transform } from 'ol/proj';
import { LocationService } from '../../services/location.service'; // Importar el servicio
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import ZoomSlider from 'ol/control/ZoomSlider'; // Añadir control de zoom deslizante

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  private map: Map | undefined;
  private userLocationLayer: VectorLayer<VectorSource> | undefined;
  private userCoords: [number, number] | undefined;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.initMap();
  }

  ngOnDestroy() {
    // Limpiar el observable si es necesario
  }

  private initMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
        zoom: 2
      }),
      controls: [] // Desactiva los controles predeterminados si quieres personalizarlos completamente
    });

    // Añadir los controles personalizados
    this.map.addControl(new ZoomSlider()); // Ejemplo de cómo agregar un control de zoom deslizante

    this.getUserLocation();
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userCoords = [position.coords.longitude, position.coords.latitude];
          this.centerMapOnLocation(this.userCoords);
        },
        (error) => {
          console.error('Error obtaining location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  private centerMapOnLocation(coords: [number, number]) {
    if (this.map) {
      const view = this.map.getView();
      view.animate({
        center: transform(coords, 'EPSG:4326', 'EPSG:3857'),
        zoom: 14,
        duration: 2000
      });
      this.addUserLocationMarker(coords);
    }
  }

  private addUserLocationMarker(coords: [number, number]) {
    if (!this.userLocationLayer) {
      this.userLocationLayer = new VectorLayer({
        source: new VectorSource(),
        style: new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: 'assets/img/pin.webp',
            scale: 0.1
          }),
        }),
      });
      if (this.map) {
        this.map.addLayer(this.userLocationLayer);
      }
    }

    const feature = new Feature({
      geometry: new Point(transform(coords, 'EPSG:4326', 'EPSG:3857')),
    });

    this.userLocationLayer.getSource()?.clear();
    this.userLocationLayer.getSource()?.addFeature(feature);
  }

  recenterMap() {
    if (this.userCoords) {
      this.centerMapOnLocation(this.userCoords);
    } else {
      this.getUserLocation();
    }
  }

  private onResize() {
    this.map?.updateSize();
  }
}
