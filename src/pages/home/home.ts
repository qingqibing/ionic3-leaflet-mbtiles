import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import "leaflet";
import "leaflet-tilelayer-mbtiles-ts";

declare var L: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: L.Map;
  center: L.PointTuple;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    //setup leaflet map
    this.initMap();
  }

  initMap() {
    this.center = [48.864716, 2.349014]; //Paris

    this.map = L.map('map', {
      center: this.center,
      zoom: 8
    });

    let mb = L.tileLayer.mbTiles('assets/tiles/countries-raster.mbtiles', {
      minZoom: 0,
      maxZoom: 6
    }).addTo(this.map);

    mb.on('databaseloaded', function(ev) {
      console.info('MBTiles DB loaded', ev);
    });
    mb.on('databaseerror', function(ev) {
      console.info('MBTiles DB error', ev);
    });


  }

}
