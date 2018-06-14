import { HeroesService, Heroe } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
// Para poder redirecionar
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  // Componentes se inicializan en el contructor
  constructor(private _heroesService: HeroesService, private router: Router) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(index: number) {
    console.log(index);
    // Redireciono a la pagina /heroe id
    this.router.navigate(['/heroe', index]);
  }
}
