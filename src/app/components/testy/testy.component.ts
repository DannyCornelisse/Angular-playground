import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../../services/pokemon/pokemon.service';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { Pokemon } from './../../interfaces/pokemon';
import { SharedService } from './../../services/shared.service';
import { SortPipe } from './../../pipes/sort.pipe';

@Component({
    selector: 'app-testy',
    templateUrl: './testy.component.html',
    styleUrls: ['./testy.component.scss'],
    providers: [SharedService, SortPipe]
})
export class TestyComponent implements OnInit {
    value: any;
    myPokemon: Array<Pokemon> = [];
    private myInterval: any;

    click(val) {
        console.log(val);
        this.value = val;
    }

    constructor(
        public pokemonService: PokemonService,
        public sharedService: SharedService
    ) {
        const observable = new Observable((observer: any) => {
            observer.next('Hey guys!');
            observer.complete();
        });

        observable.subscribe(
            res => console.log(res),
            err => console.error(err),
            () => console.log('Bye guys!')
        );
    }

    private addPokemon(res: any) {
        const newPokemon = res.json();
        newPokemon.link = `https://www.pokemon.com/us/pokedex/${newPokemon.name}`;

        const isPokemoninArray =
            this.myPokemon
                .filter(pokeman => newPokemon.id === pokeman.id)
                .length > 0;

        if (!isPokemoninArray) {
            this.myPokemon.push(newPokemon);
        }

        if (this.myPokemon.length === this.pokemonService.numberOfPokemon) {
            this.myInterval.unsubscribe();
        }
    }

    ngOnInit() {
        this.myInterval = timer(0, 2000).subscribe(
            () => this.pokemonService.getPokemon().subscribe((res: any) => this.addPokemon(res)),
            err => console.log(err),
            () => console.log('bla')
        );
    }
}
