import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  public pokename:String;

  constructor(
    private _pokeapi: PokeapiService
  ) {
    this.pokename = '';
   }

  ngOnInit(): void {
  }

  searchPoke(pokeForm:any){
    if(pokeForm.valid){
      this._pokeapi.getPokemon(this.pokename).subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error)
        }
      )
    }
  }
}
