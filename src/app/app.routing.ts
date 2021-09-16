import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PokeComponent } from './components/poke/poke.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';


const appRoute: Routes = [
    {path: '', redirectTo: 'pokedex', pathMatch: 'full'},
    {path: 'pokedex', component: PokedexComponent},
    {path: 'poke', component: PokeComponent},

];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);