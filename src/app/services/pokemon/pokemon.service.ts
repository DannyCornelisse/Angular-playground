import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {
    numberOfPokemon = 151;
    getPokemon(): Observable<any> {
        const pokemonNumber =
            Math.floor(Math.random() * (this.numberOfPokemon - 1 + 1)) + 1;
        return this.http.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`
        );
    }

    constructor(public http: Http) {}
}
