import { Component, OnInit, Input } from '@angular/core';
import { Standings } from './../../interfaces/standings';
import { MatTableDataSource, MatTable, MatFormField, MatHeaderCell, MatHeaderCellDef, MatCell, MatCellDef } from '@angular/material';

@Component({
    selector: 'app-standings-table',
    templateUrl: './standings-table.component.html',
    styleUrls: ['./standings-table.component.scss']
})
export class StandingsTableComponent implements OnInit {
    @Input() focussedTeam: String;
    @Input() standings: Array<Standings>;

    displayedColumns = [
        'teamName',
        'gamesPlayed',
        'gamesWon',
        'gamesDrawn',
        'gamesLost',
        'points',
        'goalsFor',
        'goalsAgainst'
    ];

    constructor() {}

    ngOnInit() {}
}
