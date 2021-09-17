import { Location } from '@angular/common';
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
    private _pokeapi: PokeapiService,
    private _location: Location
  ) {
    this.pokename = '';
    this.loader = false;
    this.msg = '';
   }

  ngOnInit(): void {
    const q = this._location.path().toLowerCase().split('?q=')[1];
    if(q){
      this.pokename = q;
      this.search(this.pokename);
    }
  }

  searchPoke(pokeForm:any){
    if(pokeForm.valid){
      this.search(this.pokename);
    }
  }

  search(pokename:any) {
    this._location.replaceState('',`?q=${pokename.toLowerCase()}`);
    this.loader = true;
    this.pokemon = null;
    this._pokeapi.getPokemon(pokename.toLowerCase()).subscribe(
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
