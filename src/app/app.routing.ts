import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PokeComponent } from './components/poke/poke.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';


const appRoute: Routes = [
    {path: '', component: PokedexComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);