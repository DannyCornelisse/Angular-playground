import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Standings } from './../../interfaces/standings';

@Component({
    selector: 'app-standings-page',
    templateUrl: './standings-page.component.html',
    styleUrls: ['./standings-page.component.scss']
})
export class StandingsPageComponent implements OnInit {
    teamStandings: Array<Standings> = [];

    constructor(private db: AngularFireDatabase) {}

    getTeamsStandings(data: Object) {
        for (const teamId in data) {
            if (data.hasOwnProperty(teamId)) {
                const teamData = data[teamId];
                const newTeam: Standings = {...teamData, fireBaseId: teamId};
                this.teamStandings.push(newTeam);
            }
        }
    }

    ngOnInit() {
        console.log(this.db.object('/standings'));

        this.db
            .object('/standings')
            .valueChanges()
            .subscribe((res: Object) => this.getTeamsStandings(res));
    }
}

