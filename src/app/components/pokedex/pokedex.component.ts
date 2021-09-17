import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  public pokename:String;
  public pokemon: any = null;
  public loader: boolean;
  public msg:String;

  constructor(
    private _pokeapi: PokeapiService
  ) {
    this.pokename = '';
    this.loader = false;
    this.msg = '';
   }

  ngOnInit(): void {
  }

  searchPoke(pokeForm:any){
    if(pokeForm.valid){
      this.loader = true;
      this.pokemon = null;
      this._pokeapi.getPokemon(this.pokename.toLowerCase()).subscribe(
        response => {
          this.pokemon = response;
          this.loader = false;
        },
        error => {
          this.pokemon = null;
          this.loader = false;
          this.msg = error.error;
        }
      )
    }
  }
}
