import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { MailService } from './mail.service';
import { PokemonService } from './services/pokemon/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MailService, PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
