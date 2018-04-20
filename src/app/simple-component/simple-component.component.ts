import { Component, OnInit } from '@angular/core';
import { MailService } from './../mail.service';
import { PokemonService } from './../services/pokemon/pokemon.service';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { Pokemon } from './../interfaces/pokemon';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css']
})
export class SimpleComponentComponent implements OnInit {
  value: any;
  myPokemon: Array<Pokemon> = [];
  private myInterval: any;

  click(val) {
    console.log(val);
    this.value = val;
  }

  constructor(public mail: MailService, public pokemonService: PokemonService) {}

  ngOnInit() {
    this.myInterval = timer(0, 2000).subscribe(() => {
      this.pokemonService.getPokemon()
        .subscribe(res => {
            const isPokemoninArray = this.myPokemon
              .filter((pokeman) => {
                return res.json().id === pokeman.id;
              })
              .length > 0;
            if (!isPokemoninArray) {
              this.myPokemon.push(res.json());
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
            if (this.myPokemon.length === this.pokemonService.numberOfPokemon) {
              this.myInterval.unsubscribe();
            }
      });
    });
    // }, 3000);
  }
}
