// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment'; // Needed for firebase

// Own
import { AppComponent } from './app.component';
import { PokemonService } from './services/pokemon/pokemon.service';
import { TestyComponent } from './components/testy/testy.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { SharedService } from './services/shared.service';
import { HeaderComponent } from './components/header/header.component';
import { SortPipe } from './pipes/sort.pipe';
import { StandingsTableComponent } from './components/standings-table/standings-table.component';
import { StandingsPageComponent } from './components/standings-page/standings-page.component';

const appRoutes: Routes = [
    {
        path: 'testy',
        component: TestyComponent
    },
    {
        path: 'standings',
        component: StandingsPageComponent
    },
    {
        path: '',
        component: FirebaseComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    TestyComponent,
    FirebaseComponent,
    HeaderComponent,
    SortPipe,
    StandingsTableComponent,
    StandingsPageComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [PokemonService, SharedService, SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
