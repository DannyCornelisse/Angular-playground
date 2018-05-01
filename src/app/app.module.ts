import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment'; // Needed for firebase

// Own
import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import { PokemonService } from './services/pokemon/pokemon.service';
import { TestyComponent } from './components/testy/testy.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { SharedService } from './services/shared.service';



@NgModule({
  declarations: [
    AppComponent,
    TestyComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [MailService, PokemonService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
