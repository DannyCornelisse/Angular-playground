import { Component, OnInit } from '@angular/core';
import { MailService } from './../../mail.service';
import { PokemonService } from './../../services/pokemon/pokemon.service';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { Pokemon } from './../../interfaces/pokemon';

@Component({
    selector: 'app-testy',
    templateUrl: './testy.component.html',
    styleUrls: ['./testy.component.scss']
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
        public mail: MailService,
        public pokemonService: PokemonService
    ) {}

    ngOnInit() {
        this.myInterval = timer(0, 2000).subscribe(
            () => {
                this.pokemonService.getPokemon().subscribe(res => {
                    const newPokemon = res.json();
                    newPokemon.link = `https://www.pokemon.com/us/pokedex/${
                        newPokemon.name
                    }`;
                    const isPokemoninArray =
                        this.myPokemon.filter(pokeman => {
                            return newPokemon.id === pokeman.id;
                        }).length > 0;
                    if (!isPokemoninArray) {
                        this.myPokemon.push(newPokemon);
                    }

                    this.myPokemon.sort((first, second) => {
                        if (first.id < second.id) {
                            return -1;
                        } else if (first.id > second.id) {
                            return 1;
                        } else {
                            return 0;
                        }
                    });
                    if (
                        this.myPokemon.length ===
                        this.pokemonService.numberOfPokemon
                    ) {
                        this.myInterval.unsubscribe();
                    }
                });
            },
            err => console.log(err),
            () => console.log('bla')
        );
    }
}
