import { HeroesService, Heroe } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  datoBusqueda: string;
  constructor(private activateRoute: ActivatedRoute, private _heroesService: HeroesService ) {
    this.activateRoute.params.subscribe(params => {
      // Veo los paramteros que vienen
      // console.log(params);
      this.datoBusqueda = params['nombre'];
      this.heroes = this._heroesService.buscarHeroe(params['nombre']);
      console.log('Buscador:');
      console.log(this.heroes);
    });
  }

  ngOnInit() {
  }

}
