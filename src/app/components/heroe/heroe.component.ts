import { HeroesService } from './../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'

})

export class HeroeComponent  {
  heroe: any = {};
    constructor(private activateRoute: ActivatedRoute, _heroes: HeroesService) {
    // Recibo parametros
    this.activateRoute.params.subscribe(params => {
      // Veo los paramteros que vienen
      // console.log(params);
      this.heroe = _heroes.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }


}
