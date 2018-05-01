import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../../services/shared.service';

@Component({
    selector: 'app-firebase',
    templateUrl: './firebase.component.html',
    styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {
    constructor(
        private db: AngularFireDatabase,
        public sharedService: SharedService
    ) {
        this.sharedService.sharedValue = 'bla';
    }

    ngOnInit() {

        const endPoint = this.db.list('/');
        endPoint.push({key: 'hello'});
        console.log('bla: ', this.db.list('/').valueChanges());
        this.db.list('/').valueChanges().subscribe(res => {
            console.log(res);
            debugger;
        });
    }
}
